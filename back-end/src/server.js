import express from "express";
import { MongoClient } from "mongodb";
import path from "path";
import dotenv from "dotenv";

const __dirname = process.cwd();

dotenv.config(); // Cargar variables de entorno desde .env

async function startServer() {
  const client = new MongoClient(process.env.MONGODB_URI);

  await client.connect();
  const db = client.db(process.env.MONGODB_DB_NAME);

  const app = express();
  app.use(express.json());

  app.use("/images", express.static(path.join(__dirname, "../assets")));

  // Configuración para servir la carpeta dist del front-end
  const distPath = path.join(__dirname, "dist");

  app.use(express.static(distPath, { maxAge: "1y", etag: false }));

  async function populatedCartIds(cartItems) {
    return Promise.all(
      cartItems.map(async (item) => {
        const product = await db
          .collection("products")
          .findOne({ id: item.productId });
        return {
          ...product,
          quantity: item.quantity || 1,
        };
      })
    );
  }

  app.get("/api/products", async (req, res) => {
    const products = await db.collection("products").find({}).toArray();
    res.json(products);
  });

  app.get("/api/products/:productId", async (req, res) => {
    const productId = req.params.productId;
    const product = await db.collection("products").findOne({ id: productId });
    res.json(product);
  });

  app.get("/api/users/:userId/cart", async (req, res) => {
    const user = await db
      .collection("users")
      .findOne({ id: req.params.userId });
    const populatedCart = await populatedCartIds(user?.cartItems || []);
    res.json(populatedCart);
  });

  app.post("/api/users/:userId/cart", async (req, res) => {
    const userId = req.params.userId;
    const productId = req.body.id;
    const quantity = req.body.quantity || 1; // Cantidad por defecto es 1

    const existUser = await db.collection("users").findOne({ id: userId });

    if (!existUser) {
      await db.collection("users").insertOne({
        id: userId,
        cartItems: [],
      });
    }

    await db.collection("users").updateOne(
      { id: userId },
      {
        $addToSet: {
          cartItems: {
            productId: productId,
            quantity: quantity,
          },
        },
      }
    );

    const user = await db
      .collection("users")
      .findOne({ id: req.params.userId });
    const populatedCart = await populatedCartIds(user?.cartItems || []);
    res.json(populatedCart);
  });

  app.delete("/api/users/:userId/cart/:productId", async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;

    try {
      // Actualizamos para eliminar el objeto completo del array cartItems que coincida con el productId
      await db
        .collection("users")
        .updateOne(
          { id: userId },
          { $pull: { cartItems: { productId: productId } } }
        );

      // Obtenemos el carrito actualizado
      const user = await db
        .collection("users")
        .findOne({ id: req.params.userId });
      const populatedCart = await populatedCartIds(user?.cartItems || []);
      res.json(populatedCart);
    } catch (error) {
      console.error("Error removing item from cart:", error);
      res.status(500).json({ error: "Error removing item from cart" });
    }
  });

  // Ruta para vaciar todo el carrito del usuario
  app.delete("/api/users/:userId/cart", async (req, res) => {
    const userId = req.params.userId;

    try {
      // Actualizamos el carrito del usuario, eliminando todos los elementos
      await db
        .collection("users")
        .updateOne({ id: userId }, { $set: { cartItems: [] } });

      // Obtenemos el carrito actualizado
      const user = await db.collection("users").findOne({ id: userId });
      const populatedCart = await populatedCartIds(user?.cartItems || []);
      res.json(populatedCart);
    } catch (error) {
      console.error("Error clearing cart:", error);
      res.status(500).json({ error: "Error clearing cart" });
    }
  });

  app.put("/api/users/:userId/cart/:productId", async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;
    const quantity = req.body.quantity;

    try {
      // Actualizar la cantidad en el documento del usuario
      await db.collection("users").updateOne(
        { id: userId, "cartItems.productId": productId },
        {
          $set: { "cartItems.$.quantity": quantity },
        }
      );

      // Obtener el carrito actualizado
      const user = await db.collection("users").findOne({ id: userId });
      const populatedCart = await populatedCartIds(user?.cartItems || []);
      res.json(populatedCart);
    } catch (error) {
      console.error("Error updating cart quantity:", error);
      res.status(500).json({ error: "Error updating cart quantity" });
    }
  });

  // Redirigir todas las rutas al archivo index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();

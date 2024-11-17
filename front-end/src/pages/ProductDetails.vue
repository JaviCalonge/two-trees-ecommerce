<script setup>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { ref, onMounted, computed, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import PageNotFound from "./PageNotFound.vue";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

const product = ref(null);
const route = useRoute();
const error = ref(false);
const cartItems = ref([]);
const loading = ref(true); // Añade el flag de carga
const showModal = ref(false);
const productIdToAdd = ref(null)

// Define el prop `user` para recibir el usuario autenticado desde el componente principal
const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
});

// Función para cargar el carrito del usuario actual
async function loadCart(user) {
  if (user) {
    try {
      const cartResponse = await axios.get(`/api/users/${props.user.uid}/cart`);
      cartItems.value = cartResponse.data.map((item) => item.id);
    } catch (e) {
      console.error("Error al cargar el carrito:", e);
    }
  } else {
    cartItems.value = []; // Limpia el carrito si no hay usuario
  }
}

// Cuando se monta el componente, chequea si se está accediendo desde un link de autenticación y, si es así, inicia sesión
onMounted(async () => {
  window.scrollTo(0, 0); // Asegura que la página se posicione en la parte superior
  
  const auth = getAuth();

  if (isSignInWithEmailLink(auth, window.location.href)) {
    const email = window.localStorage.getItem("emailForSignIn");
    await signInWithEmailLink(auth, email, window.location.href);
    alert("Successfully signed in!");
    window.localStorage.removeItem("emailForSignIn");

    // Redirige a la página principal después de iniciar sesión
    router.push("/products");
  }

  const productId = route.params.id;

  try {
    const response = await axios.get(`/api/products/${productId}`);
    product.value = response.data;

    if (!product.value) {
      error.value = true;
    } else if (props.user) {
      // Carga el carrito del usuario autenticado
      await loadCart(props.user);
    }
  } catch (e) {
    console.error("Error al obtener el producto o el carrito:", e);
    error.value = true;
  } finally {
    loading.value = false; // Cambia loading a false una vez que se complete la carga
  }

  // Verifica si cambia el usuario y actualiza el carrito en consecuencia
  watch(
    () => props.user,
    async (newUser) => {
      await loadCart(newUser);
    }
  );
});

async function signIn() {
  const email = prompt("Please enter your email to sign in");
  const auth = getAuth();
  const actionCodeSettings = {
    url: "http://localhost:5173/products",
    handleCodeInApp: true,
  };
  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  alert("A login link was sent to your email");
  window.localStorage.setItem("emailForSignIn", email);
}

// Añadir al carrito si el producto no está en él
async function addToCart() {
  const productId = route.params.id;

  if (cartItems.value.includes(productId)) {
    alert("This product is already in the cart");
    return;
  }

  try {
    await axios.post(`/api/users/${props.user.uid}/cart`, { id: productId });
    cartItems.value.push(productId);
  } catch (e) {
    console.error("Error al agregar al carrito:", e);
  }
}

// Función para abrir el modal de confirmación
function openModal(productId) {
  productIdToAdd.value = productId;
  handleAddToCart()
  showModal.value = true;
  setTimeout(() => {
    closeModal()
  }, 2000)
}

function handleAddToCart() {
  const productImage = document.getElementById("product-image");
  const cart = document.querySelector(".btn-cart"); // Selector del carrito

  if (productImage && cart) {
    // Clona la imagen del producto
    const imgClone = productImage.cloneNode(true);
    const rect = productImage.getBoundingClientRect();

    imgClone.style.position = "fixed";
    imgClone.style.left = `${rect.left}px`;
    imgClone.style.top = `${rect.top}px`;
    imgClone.classList.add("fly-to-cart");

    document.body.appendChild(imgClone);

    // Calcula la posición final y aplica la animación
    const offsetX = -500; // Ajuste en X, si es necesario
    const offsetY = -1000; // Ajuste en Y, si es necesario

    const cartRect = cart.getBoundingClientRect();
    imgClone.style.transform = `translate(${
      cartRect.left - rect.left + offsetX
    }px, ${cartRect.top - rect.top + offsetY}px) scale(0.1)`;
    imgClone.style.opacity = "0";

    imgClone.addEventListener("transitionend", () => {
      imgClone.remove(); // Elimina la imagen clonada al finalizar la animación
    });
  }
  // Añadir al carrito después de la animación
  setTimeout(() => addToCart(), 800);
}

// Función para cerrar el modal
function closeModal() {
  showModal.value = false;
  //productIdToAdd.value = null;
}

// Computed para verificar si un producto está en el carrito
const isInCart = computed(
  () => product.value && cartItems.value.includes(product.value.id)
);
</script>

<template>
  <NavBar :user="user" />
  <div class="page-wrap">
    <div v-if="loading"></div>
    <div class="description-container" v-if="!error && product">
      <h1>{{ product.name }}</h1>
      <div class="img-wrap">
        <img
          :src="`http://localhost:8000/images/${product.id}.webp`"
          alt="product"
          id="product-image"
        />
      </div>
      <div class="product-details">
        <!-- Mostrar los botones según el estado de autenticación y si el producto está en el carrito -->
        <button v-if="props.user && isInCart" class="grey-button" disabled>
          Item is already in Cart
        </button>
        <button
          v-if="props.user && !isInCart"
          @click="openModal"
          class="add-to-cart"
        >
          Add to Cart
        </button>
        <button v-if="!props.user" @click="signIn" class="sig-in-button">
          Sign in to add to Cart
        </button>
        <h3 class="price">{{ product.price }}</h3>
      </div>

      <p class="description">{{ product.description }}</p>
    </div>
    <div v-else-if="!loading && error">
      <PageNotFound />
    </div>
  </div>
  <!-- Modal de confirmación -->
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <h2>The product is in the Cart</h2>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, watch, computed } from "vue";
import axios from "axios";
import CartList from "@/components/CartList.vue";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import { useRouter } from "vue-router";

const cart = ref([]);
const showModal = ref(false); // Controla la visibilidad del modal
const productIdToRemove = ref(null); // Almacena el ID del producto a eliminar
const router = useRouter();

const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 1;
    return sum + (price * quantity);
  }, 0).toFixed(2);
});

const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
});

watch(
  () => props.user,
  async (newUser) => {
    if (newUser) {
      await loadCart(newUser);
    } else {
      cart.value = [];
    }
  },
  { immediate: true }
);

async function loadCart(user) {
  if (user) {
    try {
      const cartResponse = await axios.get(`/api/users/${user.uid}/cart`);
      cart.value = cartResponse.data.map((item) => ({
        ...item,
        // Mantenemos la cantidad existente del servidor si existe
        quantity: parseInt(item.quantity) || 1,
        price: parseFloat(item.price) || 0,
      }));
    } catch (e) {
      console.error("Error al cargar el carrito:", e);
      cart.value = [];
    }
  }
}

async function handleQuantityUpdate(product) {  // Solo recibe el producto
  if (!props.user) {
    console.error("No hay usuario autenticado");
    return;
  }

  const itemIndex = cart.value.findIndex(item => item.id === product.id);
  if (itemIndex !== -1) {
    cart.value[itemIndex].quantity = parseInt(product.quantity) || 1;
    try {
      await axios.put(`/api/users/${props.user.uid}/cart/${product.id}`, {
        quantity: cart.value[itemIndex].quantity
      });
    } catch (e) {
      console.error("Error al actualizar la cantidad en el carrito:", e);
    }
  }
}

// Función para abrir el modal de confirmación
function openModal(productId) {
  productIdToRemove.value = productId;
  showModal.value = true;
}

// Función para confirmar la eliminación del producto
async function confirmRemoval() {
  if (productIdToRemove.value) {
    try {
      const response = await axios.delete(
        `/api/users/${props.user.uid}/cart/${productIdToRemove.value}`
      );
      cart.value = response.data.map(item => ({
        ...item,
        quantity: parseInt(item.quantity) || 1,
        price: parseFloat(item.price) || 0,
      }));
    } catch (e) {
      console.error("Error al eliminar del carrito:", e);
    }
    closeModal(); // Cierra el modal
  }
}

// Función para cancelar la eliminación
function cancelRemoval() {
  closeModal();
}

// Función para cerrar el modal
function closeModal() {
  showModal.value = false;
  productIdToRemove.value = null;
}

// Función para proceder al checkout y enviar el carrito
function proceedToCheckout() {
  localStorage.setItem("cartData", JSON.stringify(cart.value));
  router.push({ name: "pay" });
}

</script>

<template>
  <NavBar :user="user"/>
  <div class="page-wrap">
    <h1>Shopping Cart</h1>
    <div v-if="cart.length > 0">
      <CartList 
        @remove-from-cart="openModal"  
        @update-quantity="handleQuantityUpdate" 
        :cart="cart" 
      />
      <div class="total-price">
        <p>Total price:</p>
        <p>{{ totalPrice }} €</p>
      </div>
      <div class="checkout-wrap">
        <button class="checkout-button" @click="proceedToCheckout">Proceed to Checkout</button>
      </div>
    </div>
    <div v-else>
      <h2 class="empty">Your Cart is empty!</h2>
    </div>
  </div>
   <!-- Modal de confirmación -->
   <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <h2>You are going to delete this item</h2>
      <div class="modal-buttons">
        <button class="modal-button" @click="confirmRemoval">Ok</button>
        <button class="modal-button" @click="cancelRemoval">Cancel</button>
      </div>
    </div>
  </div>
  <Footer />
</template>
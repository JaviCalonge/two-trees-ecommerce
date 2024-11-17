<script setup>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";


const cartData = ref([]);
const router = useRouter();

const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
});

window.scrollTo(0, 0); // Asegura que la página se posicione en la parte superior

onMounted(() => {
  const storedCart = localStorage.getItem("cartData");
  if (storedCart) {
    cartData.value = JSON.parse(storedCart);
  }
});

const totalPrice = computed(() =>
  cartData.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
);

// Limpiar el carrito en localStorage
async function clearCartAndPay() {
  
  try {
    // Solicita al servidor que vacíe el carrito
    await axios.delete(`/api/users/${props.user.uid}/cart`); // Aquí debes pasar el `userId`

    // Vaciar el carrito también en el localStorage
    localStorage.removeItem("cartData");

    // Redirigir a la página de confirmación del pedido
    
  } catch (error) {
    console.error("Error al vaciar el carrito:", error);
  }
  router.push({ name: "orderConfirm" });
}


</script>

<template>
  <NavBar :user="user"/>
  <div class="page-wrap">
    <h1 class="pay-title">This is your order</h1>
    <div class="orderFromCart">
      <div v-for="item in cartData" :key="item.id" class="order-item">
        <div class="order-name">
          <p class="order-name-title">{{ item.name }}</p>
          <img class="product-image" :src="item.imageUrl = `http://localhost:8000/images/${item.id}.webp`" alt="product" />
        </div>
        <div class="order-details">
          <p>Price: {{ item.price }} €</p>
          <p>Quantity: {{ item.quantity }}</p>
        </div>
      </div>
      <div class="total-price">
        <p>Total Price: {{ totalPrice }} €</p>
    </div>
  </div>
  <div class="pay-btn">
    <button @click="clearCartAndPay">
      Click to pay!
    </button>
  </div>
  </div>
  <Footer />
</template>
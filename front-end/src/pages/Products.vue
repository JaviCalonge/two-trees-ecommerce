<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";
import ProductsList from '@/components/ProductsList.vue';
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const props = defineProps({
  user: {
    type: Object,
    default: null
  }
});

// Declaramos 'products' como una referencia reactiva
const products = ref([]);

// Utilizamos 'onMounted' para obtener los productos cuando el componente se monte
onMounted(async () => {
  try {
    const response = await axios.get("/api/products");
    products.value = response.data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
});
</script>

<template>
  <NavBar :user="user" />
  <div class="page-wrap">
  <h1>Products</h1>
  
  <!-- Pasamos 'products' como prop al componente ProductsList -->
  <ProductsList :products="products"/>
</div>
  <Footer />
</template>


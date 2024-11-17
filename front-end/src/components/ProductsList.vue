<script setup>
import { RouterLink } from "vue-router";

// Recibimos los productos como prop desde Products.vue
const props = defineProps({
  products: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="grid-wrap">
    <div class="product-item" v-for="product in props.products" :key="product.id">
      <img :src="product.imageUrl = `http://localhost:8000/images/${product.id}.webp`" alt="product" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <RouterLink class="details-button-wrap" :to="{ name: 'product', params: { id: product.id } }">
        <button class="details-button">View Details</button>
      </RouterLink>
    </div>
  </div>
</template>

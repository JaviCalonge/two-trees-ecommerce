<script setup>
const props = defineProps({
  cart: {
    type: Array,
    required: true
  }
});

// Declara los eventos que el componente emitirá
const emit = defineEmits(['remove-from-cart', 'update-quantity']);

</script>

<template>
  <div class="product-container" v-for="product in props.cart" :key="product.id">
    <div>
      <h2>{{ product.name }}</h2>
      <img class="product-image" :src="product.imageUrl = `http://localhost:8000/images/${product.id}.webp`" alt="product" />
    </div>
    
    <div class="details-wrap">
      
      <p class="price">{{ product.price }} €</p>

      <!-- Select para la cantidad -->
      <label for="quantity">Quantity:</label>
      <select
        v-model="product.quantity"
        @change="$emit('update-quantity', product)"
      >
        <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
      </select>
      <br>
      <button @click="$emit('remove-from-cart', product.id)" class="remove-button">Delete</button>
    </div>
  </div>
</template>

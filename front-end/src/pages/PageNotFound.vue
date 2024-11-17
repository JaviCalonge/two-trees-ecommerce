<script setup>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
window.scrollTo(0, 0); // Asegura que la página se posicione en la parte superior

</script>

<template>
  <NavBar />
  <div class="page-wrap">
  <h1>Sorry, the page does not exist</h1>
  <RouterLink :to="{ name: 'products' }">
    <button class="go-back">Go back</button>
  </RouterLink>
  </div>
  <Footer />
</template>
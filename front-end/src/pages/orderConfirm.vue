<script setup>
import Footer from "@/components/Footer.vue";
import { RouterLink } from "vue-router";

window.scrollTo(0, 0); // Asegura que la página se posicione en la parte superior

</script>

<template>
  <div class="confirm-container">
    <RouterLink :to="{ name: 'home'}">
      <img class="confirm-img" src="@/assets/logo-hexagon.svg" alt="">
    </RouterLink>
      <h1 class="confirm-title">Congratulations, your order is confirmed</h1>
  </div>
  <Footer />
</template>
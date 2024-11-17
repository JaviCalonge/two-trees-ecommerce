<script setup>
import { RouterLink } from "vue-router";

</script>

<template>
  <div class="home" >
    <RouterLink :to="{ name: 'products' }">
      <img src="@/assets/logo-hexagon.svg" alt="">
    </RouterLink>
      <RouterLink style="text-decoration: none;" :to="{ name: 'products' }">
       <h1 class="home-title">Welcome!</h1>
       <h1 class="home-subtitle">Your premium olive oil shop</h1>
      </RouterLink>
  </div>
</template>
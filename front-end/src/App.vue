<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const user = ref(null);

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser; // Asigna el usuario actual o null si no hay uno
  });
});
</script>

<template>
    <router-view :user="user" />
</template>


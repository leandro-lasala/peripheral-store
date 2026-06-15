<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">HOME</RouterLink>
    |
    <RouterLink to="/products">PRODUCTOS</RouterLink>
  </nav>

  <hr>

  <RouterView />
</template>
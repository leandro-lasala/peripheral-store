<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <nav class="navbar">
      <div class="logo"></div>

      <ul class="nav-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/products">Products</RouterLink></li>
        <a href="#why-choose-us"> Why Choose Us </a>
      </ul>

      <div class="cart"></div>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  width: 100%;
  background: white;
}

.navbar {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.8rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #d34747;
}

.nav-links {
  display: flex;
  gap: 3rem;
  list-style: none;
}

.nav-links li {
  cursor: pointer;
  font-size: 0.85rem;
}
</style>

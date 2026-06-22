<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
  <Footer />
</template>

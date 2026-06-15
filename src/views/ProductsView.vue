<script setup>
 import products from '../data/products.json'
 import ProductCard from '../components/ProductCard.vue'

 console.log(products);
 
</script>

<template>
    <div>
    <h1>
        Products
    </h1>

    <ProductCard 
    v-for="product in products" 
    :key="product.id" 
    :product="product" />

    </div>
</template>
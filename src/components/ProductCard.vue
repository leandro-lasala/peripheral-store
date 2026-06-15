<script setup>

defineProps({
  product: Object
})

</script>

<template>
  <div class="product-card">

    <h3>{{ product.name }}</h3>

    <p>
      ${{ product.price }}
    </p>

    <p>
      Stock: {{ product.stock }}
    </p>

  </div>
</template>
<script setup>

defineProps({
  product: Object
})

</script>

<template>
  <div class="product-card">
  <img :src="product.image" :alt="product.name">

  <h3>{{ product.name }}</h3>

  <p>{{ product.description }}</p>

  <div class="card-footer">
    <span class="badge">
      {{ product.category }}
    </span>

    <button class="more-btn">
      More...
    </button>
  </div>
</div>
</template>

<style scoped>
.product-card {
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.product-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  object-position: center;
}



.product-card h3 {
  font-size: 15px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0;
}

.product-card p {
  font-size: 12px;
  color: #888;
  margin: 0;
  line-height: 1.5;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.badge {
  background: #c13d3d;
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
}

.more-btn {
  background: none;
  border: none;
  font-size: 12px;
  color: #888;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0;
}

.more-btn:hover {
  color: #c13d3d;
}
</style>
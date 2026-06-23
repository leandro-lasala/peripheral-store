<script setup>
import { ref, computed } from 'vue'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard.vue'

const selectedCategory = ref(null)

const categories = ['keyboards', 'mice', 'monitors', 'audio', 'cables']

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products
  return products.filter((p) => p.category === selectedCategory.value)
})
</script>

<template>
  <section class="products-section">
    <div class="products-container">
      <div class="products-header">
        <h1>All Products</h1>
        <p>Browse our full collection and find what fits your needs.</p>
      </div>

      <div class="categories-filter">
        <button
          v-for="category in categories"
          :key="category"
          class="category-btn"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = selectedCategory === category ? null : category"
        >
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </button>
      </div>

      <Transition name="fade" mode="out-in">
        <div class="products-grid" :key="selectedCategory">
          <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.products-section {
  padding: 60px 20px;
  background: #fafafa;
}

.products-container {
  max-width: 1400px;
  margin: 0 auto;
}

.products-header {
  text-align: center;
  margin-bottom: 40px;
}

.products-header h1 {
  font-size: 42px;
  font-weight: 700;
  color: #2c2c2c;
  margin: 0 0 12px 0;
  letter-spacing: -0.5px;
}

.products-header p {
  font-size: 15px;
  color: #666;
  margin: 0;
  line-height: 1.6;
}

.categories-filter {
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.category-btn {
  background: white;
  border: 1px solid #e0e0e0;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-btn:hover {
  border-color: #c13d3d;
  color: #c13d3d;
}

.category-btn.active {
  background: #c13d3d;
  color: white;
  border-color: #c13d3d;
  box-shadow: 0 4px 12px rgba(193, 61, 61, 0.2);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* Fade transition animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .products-section {
    padding: 40px 20px;
  }

  .products-header h1 {
    font-size: 32px;
  }

  .categories-filter {
    margin-bottom: 30px;
    gap: 10px;
  }

  .category-btn {
    padding: 6px 14px;
    font-size: 12px;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .products-section {
    padding: 30px 16px;
  }

  .products-header h1 {
    font-size: 24px;
  }

  .products-header p {
    font-size: 13px;
  }

  .categories-filter {
    margin-bottom: 24px;
    gap: 8px;
  }

  .category-btn {
    padding: 6px 12px;
    font-size: 11px;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>

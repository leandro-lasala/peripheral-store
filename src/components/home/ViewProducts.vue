<template>
  <section class="featured-products">
    <h2>View products</h2>
    <p>Browse our full collection and find what fits your needs.</p>

    <div class="products-showcase">
      <div class="pill image-pill">
        <img src="../../assets/images/beoplay-hx-sand.jpg" alt="" />
      </div>

      <button class="pill button-pill orange">View</button>

      <button class="pill button-pill red">View</button>

      <div class="pill image-pill">
        <img src="../../assets/images/keynova-orbit-tkl.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-products {
  padding: 80px 20px;
  text-align: center;
  background: #fafafa;
}

.featured-products h2 {
  font-family: 'Crimson Text', serif;
  font-size: 36px;
  margin-bottom: 18px;
  color: var(--color-text);
}

.featured-products p {
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 60px;
}

.products-showcase {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
}

.pill {
  width: 300px;
  height: 60px;
  border-radius: 999px;
  overflow: hidden;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

.image-pill {
  background: #ddd;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

.image-pill img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.button-pill {
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: white;
  transition: 0.3s ease;
}

.button-pill:hover {
  transform: translateY(-4px);
}

.orange {
  background: #f07a43;
}

.red {
  background: #cf4242;
}

@media (max-width: 1100px) {
  .featured-products {
    padding: 70px 20px;
  }

  .featured-products h2 {
    font-size: 42px;
  }

  .featured-products p {
    max-width: 600px;
    margin: 0 auto 50px;
  }

  .products-showcase {
    max-width: 650px;
    gap: 18px;
  }
}

@media (max-width: 900px) {
  .products-showcase {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .pill {
    width: 280px;
    height: 70px;
  }

  .button-pill {
    font-size: 32px;
  }

  .featured-products h2 {
    font-size: 28px;
  }

  .featured-products p {
    font-size: 15px;
    padding: 0 20px;
  }
}

.pill {
  width: 250px;
  height: 45px;
  font-size: 1rem;
}
</style>

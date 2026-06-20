<template>
  <section class="hero-section">
    <div class="hero-card">
      <h1>Welcome to a Better Setup</h1>

      <p>Clean, reliable peripherals designed for everyday use.</p>

      <img src="../../assets/images/hero.png" alt="Hero Keyboard" />

      <button>Sign In / Register</button>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  padding: 3rem 2rem;
}

.hero-card {
  width: 100%;
  max-width: 1000px;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
}

.hero-card img {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  margin: 2rem 0;
}

button {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
}
</style>

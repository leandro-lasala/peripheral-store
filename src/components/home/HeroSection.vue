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
  align-items: center;
  min-height: 70vh;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 20px;
}

.hero-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 60px 40px;
  max-width: 1200px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hero-card h1 {
  font-family: 'Crimson Text', serif;
  font-size: 40px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  letter-spacing: -0.5px;
}

.hero-card p {
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.6;
}

.hero-card img {
  width: 800px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  margin: 0 auto;
  display: block;
}

.hero-card button {
  align-self: center;
  background: #e74c3c;
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Poppins', sans-serif;
}

.hero-card button:hover {
  background: #c0392b;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(231, 76, 60, 0.3);
}

.hero-card button:active {
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-card {
    padding: 40px 24px;
    gap: 20px;
  }

  .hero-card h1 {
    font-size: 32px;
  }

  .hero-card p {
    font-size: 14px;
  }

  .hero-card button {
    width: 200px;
  }

  .hero-card button {
    width: 150px;
    font-size: 10px;
    padding: 10px 1px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: auto;
    padding: 20px 0;
  }

  .hero-card {
    padding: 30px 20px;
    border-radius: 12px;
  }

  .hero-card h1 {
    font-size: 24px;
  }

  .hero-card p {
    font-size: 13px;
  }

  .hero-card button {
    width: 115px;
    font-size: 10px;
    padding: 5px 1px;
  }
}
</style>

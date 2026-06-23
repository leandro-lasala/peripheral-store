<template>
  <section class="why-choose-us">
    <div class="why-choose-us-container">
      <div class="why-choose-us-text">
        <h2>Why Choose Us?</h2>
        <p>
          We provide high-quality peripherals designed for performance, comfort, and durability. Our
          goal is to offer reliable products with a seamless shopping experience.
        </p>
      </div>

      <div class="reasons-grid">
        <div class="reason-card">
          <h3>Ergonomics</h3>
          <p>Meticulously engineered to adapt to your body</p>
          <img src="/public/images/choose 3.png" alt="Reason 1" />
        </div>

        <div class="reason-card">
          <h3>Quality</h3>
          <p>Selected premium materials and high-end finishes</p>
          <img src="/public/images/choose 1.png" alt="Reason 2" />
        </div>

        <div class="reason-card">
          <h3>Design</h3>
          <p>Beautiful peripherals that transform and inspire your daily desk setup</p>
          <img src="/public/images/choose 2.png" alt="Reason 3" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose-us {
  padding: 80px 20px;
  background: #fafafa;
}

.why-choose-us-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
}

.why-choose-us-text {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.why-choose-us-text h2 {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 24px 0;
  line-height: 1.2;
}

.why-choose-us-text p {
  font-size: 16px;
  color: var(--color-text);
  margin: 0;
  text-align: justify;
}

.reasons-grid {
  flex: 1.2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.reason-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
}

.reason-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.reason-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0;
}

.reason-card p {
  font-size: 13px;
  color: #888;
  margin: 0;
  line-height: 1.6;
}

.reason-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}

@media (max-width: 1100px) {
  .why-choose-us-container {
    flex-direction: column;
    align-items: stretch;
  }

  .why-choose-us-text {
    width: 100%;
    max-width: 700px;
  }

  .reasons-grid {
    width: 100%;
  }
}

@media (max-width: 900px) {
}

@media (max-width: 900px) {
  .reasons-grid {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .reason-card {
    width: 280px;
    min-height: 280px;
    aspect-ratio: 1 / 1;

    padding: 18px;
    gap: 12px;
  }

  .reason-card img {
    width: 100%;
    max-width: 180px;
    height: 140px;
    margin: auto;

    object-fit: cover;
    border-radius: 12px;
  }

  .why-choose-us-text h2 {
    font-size: 28px;
  }
}
</style>

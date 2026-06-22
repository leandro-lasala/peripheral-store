<template>
  <footer class="footer">
    <div class="footer-container">
      <p>&copy; 2026 Peripheral Store | Designed by Leandro Lasala</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: white;
  border-top: 1px solid #e0e0e0;
  padding: 32px 20px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer p {
  font-size: 14px;
  color: #666;
  margin: 0;
  text-align: center;
  letter-spacing: 0.3px;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 24px 20px;
  }

  .footer p {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 20px 16px;
  }

  .footer p {
    font-size: 12px;
  }
}
</style>

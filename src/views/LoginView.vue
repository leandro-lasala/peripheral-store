<script setup>
import { ref } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const login = () => {
  router.push('/')
}

const isSignup = ref(false)

// Login datos
const email = ref('')
const password = ref('')
const rememberMe = ref(false)

// Signup datos
const fullName = ref('')
const signupEmail = ref('')
const signupPassword = ref('')
const confirmPassword = ref('')

const handleLogin = () => {
  if (!email.value || !password.value) {
    alert('Completa todos los campos')
    return
  }

  console.log('Login:', {
    email: email.value,
    password: password.value,
  })

  router.push('/')
}

const handleSignup = () => {
  if (!fullName.value || !signupEmail.value || !signupPassword.value || !confirmPassword.value) {
    alert('Completa todos los campos')
    return
  }
  if (signupPassword.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden')
    return
  }
  console.log('Signup:', { fullName: fullName.value, email: signupEmail.value })
}
</script>

<template>
  <div class="signin-container">
    <div class="signin-card">
      <!-- LOGIN FORM -->
      <template v-if="!isSignup">
        <h1>Sign in</h1>
        <p class="signin-subtitle">Access your account to continue</p>

        <form @submit.prevent="handleLogin" class="signin-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div class="form-checkbox">
            <input type="checkbox" id="remember" v-model="rememberMe" />
            <label for="remember">Remember me</label>
          </div>

          <button type="submit" class="login-btn">Login</button>
        </form>

        <div class="signin-footer">
          <p>
            Don't have an account?
            <a href="#" @click.prevent="isSignup = true" class="link">Create account</a>
          </p>
          <a href="#" class="link">Forgot your password?</a>
        </div>
      </template>

      <!-- SIGNUP FORM -->
      <template v-else>
        <h1>Create account</h1>
        <p class="signin-subtitle">Join us and start shopping</p>

        <form @submit.prevent="handleSignup" class="signin-form">
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              v-model="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div class="form-group">
            <label for="signupEmail">Email</label>
            <input
              type="email"
              id="signupEmail"
              v-model="signupEmail"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <label for="signupPassword">Password</label>
            <input
              type="password"
              id="signupPassword"
              v-model="signupPassword"
              placeholder="Create a password"
              required
            />
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" class="login-btn">Create Account</button>
        </form>

        <div class="signin-footer">
          <p>
            Already have an account?
            <a href="#" @click.prevent="isSignup = false" class="link">Sign in</a>
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.signin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 20px;
}

.signin-card {
  background: white;
  border-radius: 16px;
  padding: 48px 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
}

.signin-card h1 {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 8px 0;
  text-align: center;
}

.signin-subtitle {
  font-size: 14px;
  color: #888;
  text-align: center;
  margin: 0 0 32px 0;
  line-height: 1.5;
}

.signin-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 13px;
  font-weight: 500;
  color: #2c2c2c;
}

.form-group input[type='email'],
.form-group input[type='password'] {
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  color: #2c2c2c;
  transition: all 0.3s ease;
  background: #fafafa;
}

.form-group input[type='text'] {
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  color: #2c2c2c;
  transition: all 0.3s ease;
  background: #fafafa;
}

.form-group input[type='email']:focus,
.form-group input[type='password']:focus,
.form-group input[type='text']:focus {
  outline: none;
  border-color: #c13d3d;
  background: white;
  box-shadow: 0 0 0 3px rgba(193, 61, 61, 0.1);
}

.form-group input::placeholder {
  color: #bbb;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-checkbox input[type='checkbox'] {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #c13d3d;
}

.form-checkbox label {
  font-size: 13px;
  color: #666;
  cursor: pointer;
  margin: 0;
}

.login-btn {
  background: #c13d3d;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;
  margin-top: 8px;
}

.login-btn:hover {
  background: #a83232;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(193, 61, 61, 0.3);
}

.login-btn:active {
  transform: translateY(0);
}

.signin-footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
}

.signin-footer p {
  font-size: 13px;
  color: #666;
  margin: 0;
}

.link {
  color: #c13d3d;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.link:hover {
  color: #a83232;
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 1024px) {
  .signin-card {
    max-width: 350px;
    padding: 40px 32px;
  }

  .signin-card h1 {
    font-size: 28px;
  }

  .signin-subtitle {
    font-size: 14px;
  }

  .signin-form {
    gap: 18px;
  }

  .form-group input[type='email'],
  .form-group input[type='password'],
  .form-group input[type='text'] {
    padding: 11px 13px;
    font-size: 13px;
  }

  .login-btn {
    padding: 11px 22px;
    font-size: 13px;
  }
}

@media (max-width: 768px) {
  .signin-container {
    padding: 30px 15px;
    min-height: 100vh;
  }

  .signin-card {
    max-width: 320px;
    padding: 36px 28px;
  }

  .signin-card h1 {
    font-size: 26px;
    margin-bottom: 6px;
  }

  .signin-subtitle {
    font-size: 13px;
    margin-bottom: 28px;
  }

  .signin-form {
    gap: 16px;
    margin-bottom: 20px;
  }

  .form-group {
    gap: 6px;
  }

  .form-group label {
    font-size: 12px;
  }

  .form-group input[type='email'],
  .form-group input[type='password'],
  .form-group input[type='text'] {
    padding: 10px 12px;
    font-size: 13px;
    border-radius: 6px;
  }

  .form-checkbox {
    gap: 6px;
  }

  .form-checkbox input[type='checkbox'] {
    width: 14px;
    height: 14px;
  }

  .form-checkbox label {
    font-size: 12px;
  }

  .login-btn {
    padding: 10px 20px;
    font-size: 13px;
    margin-top: 6px;
    border-radius: 20px;
  }

  .signin-footer {
    gap: 10px;
  }

  .signin-footer p {
    font-size: 12px;
  }

  .link {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .signin-container {
    padding: 20px 12px;
  }

  .signin-card {
    max-width: 100%;
    padding: 32px 20px;
    border-radius: 12px;
  }

  .signin-card h1 {
    font-size: 24px;
    margin-bottom: 6px;
  }

  .signin-subtitle {
    font-size: 12px;
    margin-bottom: 24px;
  }

  .signin-form {
    gap: 14px;
    margin-bottom: 18px;
  }

  .form-group {
    gap: 5px;
  }

  .form-group label {
    font-size: 11px;
    font-weight: 500;
  }

  .form-group input[type='email'],
  .form-group input[type='password'],
  .form-group input[type='text'] {
    padding: 9px 11px;
    font-size: 13px;
    border-radius: 6px;
  }

  .form-group input::placeholder {
    font-size: 12px;
  }

  .form-checkbox {
    gap: 6px;
  }

  .form-checkbox input[type='checkbox'] {
    width: 14px;
    height: 14px;
    min-width: 14px;
  }

  .form-checkbox label {
    font-size: 11px;
  }

  .login-btn {
    padding: 10px 18px;
    font-size: 12px;
    margin-top: 4px;
    border-radius: 20px;
    font-weight: 600;
  }

  .signin-footer {
    gap: 8px;
  }

  .signin-footer p {
    font-size: 11px;
    line-height: 1.4;
  }

  .link {
    font-size: 11px;
  }
}
</style>

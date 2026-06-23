# TechStore - Proyecto Vue.js

## Descripción

TechStore es una aplicación web desarrollada con Vue 3 que simula una tienda online de productos tecnológicos. Permite a los usuarios navegar por el catálogo de productos, visualizar información relevante y acceder a una interfaz de inicio de sesión y registro.

---

## Funcionalidades Principales

### Página de Inicio
- Landing page responsive.
- Sección principal (Hero) con presentación de la tienda.
- Sección informativa sobre las ventajas de la marca.
- Encabezado y pie de página reutilizables.

### Catálogo de Productos
- Listado dinámico de productos obtenido desde archivos JSON.
- Visualización de productos mediante tarjetas (cards).
- Cada producto muestra:
  - Imagen
  - Nombre
  - Descripción
  - Categoría
- Diseño responsive adaptado a distintos dispositivos.
- Efectos visuales al interactuar con las tarjetas.
- Filtros de categorias

### Sistema de Autenticación (Simulado)
- Formulario de inicio de sesión.
- Formulario de registro de usuarios.
- Validación básica de campos obligatorios.
- Cambio dinámico entre Login y Registro.
- Redirección al Home luego de completar correctamente el formulario de inicio de sesión.

### Navegación entre Vistas
Implementada mediante Vue Router.

Rutas disponibles:
- Inicio (`/`)
- Productos (`/products`)
- Login (`/login`)

### Manejo de Datos
- Información de productos almacenada en archivos JSON.
- Renderizado dinámico utilizando directivas de Vue:
  - `v-for`
  - `v-if`
  - `v-model`

---

## Tecnologías Utilizadas

- Vue 3
- Vue Router
- JavaScript 
- HTML5
- CSS3
- Vite

---

## Estructura General del Proyecto

src/
├── assets/
├── components/
├── data/
├── router/
├── views/
├── App.vue
└── main.js

---

## Posibles Mejoras Futuras

- Vista de detalle de producto.
- Carrito de compras.
- Buscador de productos.
- Integración con una API o base de datos.

---

## Autor
Micaela Carollo Fatima Funes Leandro Lasala
Proyecto desarrollado con fines académicos para la práctica de Vue.js y el desarrollo de aplicaciones SPA (Single Page Applications).

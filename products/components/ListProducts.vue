<template>
    <div>
      <ul>
        <li v-for="product in products" :key="product.id">
          <NuxtLink :to="`/products/${product.id}`">
            {{ product.nombre }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const products = [
    { id: 1, nombre: 'Tomate' },
    { id: 2, nombre: 'Pimientos' },
    { id: 3, nombre: 'Zanahorias' },
    { id: 4, nombre: 'Rúcula' }
  ]
  </script>
  
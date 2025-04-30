<template>
  <div class="min-h-screen bg-blue-50 p-6">
    <div class="max-w-3xl text-center">
      <h1 class="text-3xl font-bold text-center text-blue-800 mb-6">Lista de productos</h1>
      <ListProducts />
    </div>
  </div>
</template>

<script setup>
import ListProducts from '~/components/ListProducts.vue'
</script>

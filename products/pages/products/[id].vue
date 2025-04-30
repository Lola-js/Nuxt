<template>
  <div class="min-h-screen flex flex-col items-center pt-10 bg-grey-100 p-6">
    <div class="bg-white shadow-md p-6">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Título del producto:</h1>
      <p class="text-lg text-gray-700 mb-2">{{ product.title }}</p>

      <h2 class="text-xl font-semibold text-gray-800 mt-4">Descripción:</h2>
      <p class="text-gray-600">{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref({ title: 'Cargando...', description: 'Cargando...' })

onMounted(async () => {
  const res = await fetch(`/api/products/${route.params.id}`)
  product.value = await res.json()
})
</script>

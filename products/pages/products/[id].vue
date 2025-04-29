<template>
  <div>
    <h1>Producto {{ productId }}</h1>
    <p>{{ description }}</p> 
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { descriptions } from '../../data/descriptions.js' 
const route = useRoute()
const productId = route.params.id 
const description = descriptions[productId] || 'Descripción no disponible'
</script>

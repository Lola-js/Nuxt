<template>
    <div>
      <h1>Proyecto {{ projectId }}</h1>
      <p>{{ projectDetails }}</p> <!-- Mostrar detalles del proyecto -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const projectId = ref(route.params.id)  // Obtienes el id de la URL
  const projectDetails = ref('')
  
  onMounted(async () => {
    projectDetails.value = `Detalles del proyecto con ID: ${projectId.value}`
  })
  </script>
  
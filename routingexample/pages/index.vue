<template>
  <ul>
    <li v-for="(item, index) in notes" :key="index">{{ item.title }}</li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NoteService from '../services/NoteService'

const notes = ref([]) 

const noteService = new NoteService()

onMounted(async () => {
  notes.value = await noteService.GetNote()
})
</script>

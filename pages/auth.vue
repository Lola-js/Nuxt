<template>
    <div>
      <form @submit.prevent="authUser">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Introduce tu dirección Email..." v-model="email">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Introduce una contraseña..." v-model="password">
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  
  // variables email y la contraseña
  let email = ref("");
  let password = ref("");
  
  // Función 
  const authUser = () => {
    const auth = getAuth(useNuxtApp().$firebase); 
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        alert("Éxito!");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };
  </script>
  
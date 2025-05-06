
import { initializeApp } from "firebase/app"

export default defineNuxtPlugin(nuxtApp => {
    
  const firebaseConfig = {

        apiKey: ***********************************
        authDomain: "curso-vue-5eb4a.firebaseapp.com",
        projectId: "curso-vue-5eb4a",
        storageBucket: "curso-vue-5eb4a.appspot.com", 
        messagingSenderId: "264546873434",
        appId: "1:264546873434:web:77d996e897952e81c76863",
        measurementId: "G-35MD7SNWER"
      };
      
    const app = initializeApp(firebaseConfig);

    nuxtApp.provide('firebase', app)

})

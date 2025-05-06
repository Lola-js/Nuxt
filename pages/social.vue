<template>
    <h1>Social login</h1>
    <button @click="loginGoogle">Login with Google</button>
    <button>Login with Facebook</button>
    <button>Login with Twitter</button>
    <button>Login with Github</button>

</template>

<script setup>
        import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
        import { useNuxtApp } from '#app'

        const { $firebase } = useNuxtApp() // accede al app inicializado desde el plugin
        const auth = getAuth($firebase) // usa la instancia correctamente
        const provider = new GoogleAuthProvider()

        const loginGoogle = () => {
        signInWithPopup(auth, provider)
           
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token=credential?.accesToken
            alert("Success! Bienvenido " + result.user.email)
            })
            .catch(error => {
            alert("Login failed: " + error.message)
            })
        }
</script>
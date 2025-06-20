<template>
  <div>
    <h1>Login / Register</h1>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
    <button @click="register">Register</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { ROUTE_NAMES } from "@/router/NamedRoute";

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push(ROUTE_NAMES.DASHBOARD);
  } catch (err) {
    alert(err.message);
  }
};

const register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push(ROUTE_NAMES.DASHBOARD);
  } catch (err) {
    alert(err.message);
  }
};
</script>

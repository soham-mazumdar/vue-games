<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome, {{ auth.currentUser?.email }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { ROUTE_NAMES } from "@/router/NamedRoute";

const router = useRouter();

const logout = async () => {
  try {
    await signOut(auth);
    router.push(ROUTE_NAMES.HOME); // ✅ Redirect to home after logout
  } catch (err) {
    alert('Error signing out: ' + err.message);
  }
};
</script>

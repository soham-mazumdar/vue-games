<template>
  <div>
    <!-- <h1>Dashboard</h1>
    <p>Welcome, {{ user?.email }}</p>
    <button @click="logout">Logout</button> -->

    <BooksView/>


  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { auth } from "../../firebase";
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { ROUTE_NAMES } from "@/router/NamedRoute";
import { useCurrentUser } from 'vuefire';
import  BooksView  from '@/features/bookworm/components/BooksView.vue';



const router = useRouter();
const user = useCurrentUser();
const logout = async () => {
  try {
    signOut(getAuth())

    router.push(ROUTE_NAMES.HOME); 
  } catch (err) {
    alert('Error signing out: ' + err.message);
  }
};
</script>

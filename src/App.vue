<template>
  <router-view v-if="isReady" />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useRouter } from 'vue-router';

const isReady = ref(false);
const router = useRouter();

onMounted(() => {
  onAuthStateChanged(auth, user => {
    isReady.value = true;
    if (user && router.currentRoute.value.path === '/login') {
      router.push('/dashboard');
    }
  });
});

</script>
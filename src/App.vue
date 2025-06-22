<template>
  <router-view/>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useRouter } from 'vue-router';
import { getCurrentUser } from 'vuefire'


const isReady = ref(false);
const router = useRouter();
const user = getCurrentUser();

onMounted(() => {
  console.log('onMounted');
  
  if (user.value) {
    console.log('val');
    router.push('/dashboard')
  }
  
});

</script>
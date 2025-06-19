<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style scoped>
  .h10{
    height: 10px;
  }
  .h20{
    height: 20px;
  }
  .h30{
    height: 30px;
  }
</style>
<template>
  <div class="container text-center">
    <h3>This is my Vue PlayGround</h3>
    <p>
      A collection of mini apps and experiments built while learning and playing
      with Vue.js.
    </p>
  </div>
  <div class="h10"></div>
  <div class="p-2">
    <div class="d-flex justify-content-center">
      <div class="btn-group" role="group">
        <router-link class="btn btn-primary" :to="{ name: ROUTE_NAMES.TICTACTOE }"
          >TicTacToe</router-link
        >

        <router-link class="btn btn-primary" :to="{ name: ROUTE_NAMES.WORDGAME }"
          >
          Guess Word
        </router-link>
      </div>
    </div>
  </div>
  <div class="h10"></div>
</template>
<script setup>
import {ROUTE_NAMES} from "@/router/NamedRoute";
</script>

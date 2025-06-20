<template>
  <div
    class="min-vh-100 d-flex justify-content-center align-items-center text-center"
  >
    <div>
      <h3>This is my Vue PlayGround</h3>
      <p>
        A collection of mini apps and experiments built while learning and
        playing with Vue.js.
      </p>

      <div class="offset-md-3 col-md-6">
        <ul class="list-group">
          <router-link
            class="list-group-item enable-button-pointers"
            :to="{ name: ROUTE_NAMES.TICTACTOE }"
            >TicTacToe</router-link
          >
          <router-link
            class="list-group-item enable-button-pointers"
            :to="{ name: ROUTE_NAMES.WORDGAME }"
            >Guess Word</router-link
          >
          <router-link
            class="list-group-item enable-button-pointers"
            :to="{ name: ROUTE_NAMES.GOT }"
            >Game Of Thrones</router-link
          >
          <router-link
            class="list-group-item enable-button-pointers active"
            :to="{ name: ROUTE_NAMES.DASHBOARD }"
            >Auth Section</router-link
          >
        </ul>
      </div>
    </div>
  </div>
  <div class="sticky-bottom w-100 text-center p-2">
    <a href="https://www.flaticon.com" title="instrument icons"
      >icons created by Flaticon</a
    >
  </div>
</template>

<script setup>
import TicTacToe from "@/features/games/tictactoe/TicTacToe.vue";
import { ROUTE_NAMES } from "@/router/NamedRoute";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

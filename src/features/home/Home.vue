<template>
  <div class="min-vh-100 d-flex justify-content-center align-items-center text-center">
    <div>
      <h3>This is my Vue PlayGround</h3>
      <p>
        A collection of mini apps and experiments built while learning and
        playing with Vue.js.
      </p>

      <div class="p-2">
        <div class="d-flex justify-content-center">
          <div class="btn-group" role="group">
            <router-link
              class="btn btn-primary"
              :to="{ name: ROUTE_NAMES.TICTACTOE }"
              >TicTacToe</router-link
            >

            <router-link
              class="btn btn-primary"
              :to="{ name: ROUTE_NAMES.WORDGAME }"
              >Guess Word</router-link
            >
          </div>
        </div>
      </div>

      <div class="p-2">
        <div class="d-flex justify-content-center">
          <div class="btn-group" role="group">
            <router-link
              class="btn btn-primary"
              :to="{ name: ROUTE_NAMES.GOT }">
                Game of Thrones
              </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sticky-bottom w-100 text-center p-2">
    <a  href="https://www.flaticon.com" title="instrument icons">icons created by Flaticon</a>
  </div>
</template>

<script setup>
import TicTacToe from "@/features/tictactoe/TicTacToe.vue";
import { ROUTE_NAMES } from "@/router/NamedRoute";
</script>

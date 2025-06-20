<template>
  <Header></Header>
  <div
    class="min-vh-100 d-flex justify-content-center align-items-center text-center w-100"
  >
  <div class="game">
    <div v-if="!gameStarted">
      
      <div class="">
        <div class="input-group">
          <input type="text" class="form-control" v-model="wordInput">
        </div>
        <div class="form-text">Enter comma-separated words (e.g. a, ab, abc, abcd, abcde)</div>
      </div>
      <br />
      <button class="btn btn-primary" @click="startGame">Start Game</button>
    </div>
    <div v-else>
      <p class="word">
        <span v-for="(letter, i) in selectedWord" :key="i">
          {{ guessedLetters.includes(letter) ? letter : "_" }}
        </span>
      </p>

      <p class="letters clearfix">
        <span
        class="d-inline-block bg-warning rounded-2"
          v-for="letter in alphabet"
          :key="letter"
          :class="guessedLetters.includes(letter) || gameOver ? 'disabled' : ''"
          @click="guess(letter)"
        >
          {{ letter }}
        </span>
      </p>

      <p class="status">
        <span v-if="winner">🎉 You won!</span>
        <span v-else-if="loser"
          >💀 You lost. Word was "{{ selectedWord }}"</span
        >
        <span v-else>Mistakes: {{ wrongGuesses.length }}/{{ maxWrong }}</span>
      </p>

      <div class="d-flex justify-content-center">
        <div class="btn-group" role="group">
          <button class="btn btn-primary" @click="toNext">Next</button>
          <button class="btn btn-primary" @click="reStart">Restart</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Header from "../../home/Header.vue";

const wordInput = ref("");
const customWords = ref([]);
const gameStarted = ref(false);

const selectedWord = ref("");
const guessedLetters = ref([]);

const maxWrong = 6;
const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const wrongGuesses = computed(() =>
  guessedLetters.value.filter(
    (l) => !selectedWord.value.includes(l.toUpperCase())
  )
);

const winner = computed(() =>
  selectedWord.value
    .split("")
    .every((l) => guessedLetters.value.includes(l.toUpperCase()))
);

const loser = computed(() => wrongGuesses.value.length >= maxWrong);
const gameOver = computed(() => winner.value || loser.value);

function guess(letter) {
  guessedLetters.value.push(letter.toUpperCase());
}

function toNext() {
  selectedWord.value = getRandomWord();
  guessedLetters.value = [];
  
}

function reStart() {
  
  guessedLetters.value = [];
  wordInput.value = "";
  customWords.value = [];
  gameStarted.value = false;

  selectedWord.value = "";
  guessedLetters.value = [];
}

function startGame() {
  customWords.value = wordInput.value
    .split(",")
    .map((word) => word.trim().toUpperCase())
    .filter((word) => word.length > 0);

  if (customWords.value.length === 0) {
    alert("Please enter at least one word.");
    return;
  }

  selectedWord.value = getRandomWord();
  guessedLetters.value = [];
  gameStarted.value = true;
}

function getRandomWord() {
  return customWords.value[
    Math.floor(Math.random() * customWords.value.length)
  ];
}
</script>

<style scoped>
.game {
  text-align: center;
  font-family: sans-serif;
  padding: 2rem;
}
.word {
  font-size: 2rem;
  letter-spacing: 1rem;
  margin: 1.5rem 0;
}
.letters span {
  margin: 4px;
  padding: 8px 12px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
}
.letters span.disabled {
  background-color: #ccc !important;
  cursor: not-allowed;
}
.status {
  margin: 1rem 0;
  font-size: 1.2rem;
}
</style>

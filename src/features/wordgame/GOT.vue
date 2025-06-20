<template>
  <Header></Header>
  <div
    class="min-vh-100 d-flex justify-content-center align-items-center text-center w-100"
  >
  <div class="game">
    <div>
      <p class="word">
        <span v-for="(letter, i) in selectedWord" :key="i">
        {{ !isAlpha(letter) ? letter : (guessedLetters.includes(letter) ? letter : "_") }}
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

      <p v-if="showHint" class="border border-warning bg-warning-subtle d-inline-block py-2 px-4 rounded-2">{{ character }}</p>

      <p class="status">
        <span v-if="winner">🎉 You won!</span>
        <span v-else-if="loser"
          >💀 You lost. Word was "{{ selectedWord }}"</span
        >
        <span v-else>Mistakes: {{ wrongGuesses.length }}/{{ maxWrong }}</span>
      </p>

      <div class="d-flex justify-content-center">
        <div class="btn-group" role="group">
          <button class="btn btn-primary" @click="startGame">Next</button>
          <button class="btn btn-primary" :class="wrongGuesses.length<5?'disabled':''" @click="showHint = !showHint">Show Hint</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed,onMounted } from "vue";
import Header from "../home/Header.vue";
import { useQuotes } from "./composables/useQuotes.js";

const { quote,character, fetchQuote } = useQuotes();

console.log(character);
console.log(quote);


// const gameStarted = ref(false);
const showHint = ref(false);
const selectedWord = ref("");
const guessedLetters = ref([]);

const maxWrong = 6;
const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const wrongGuesses = computed(() =>
  guessedLetters.value.filter(
    (l) => !selectedWord.value.includes(l.toUpperCase())
  )
);

function isAlpha(char) {
  return /^[A-Z]$/i.test(char);
}

const winner = computed(() =>
  selectedWord.value
    .split("")
    .every((l) =>
      !isAlpha(l) || guessedLetters.value.includes(l.toUpperCase())
    )
);

const loser = computed(() => wrongGuesses.value.length >= maxWrong);
const gameOver = computed(() => winner.value || loser.value);

function guess(letter) {
  if (!gameOver.value && !guessedLetters.value.includes(letter.toUpperCase())) {
    guessedLetters.value.push(letter.toUpperCase());
  }
}

async function startGame() {
  await fetchQuote();
  selectedWord.value = quote.value;
  guessedLetters.value = [];
//   gameStarted.value = true;
}

async function toNext() {
  await fetchQuote();
  selectedWord.value = quote.value;
  guessedLetters.value = [];
}

function reStart() {
  guessedLetters.value = [];
  selectedWord.value = "";
//   gameStarted.value = false;
}

onMounted(() => {
  startGame();
});

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

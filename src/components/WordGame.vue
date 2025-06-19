<template>
  <div class="game">
    <h1>🎯 Hangman</h1>
    
    <p class="word">
      <span v-for="(letter, i) in selectedWord" :key="i">
        {{ guessedLetters.includes(letter) ? letter : '_' }}
      </span>
    </p>

    <p class="letters">
      <button
        v-for="letter in alphabet"
        :key="letter"
        :disabled="guessedLetters.includes(letter) || gameOver"
        @click="guess(letter)"
      >
        {{ letter }}
      </button>
    </p>

    <p class="status">
      <span v-if="winner">🎉 You won!</span>
      <span v-else-if="loser">💀 You lost. Word was "{{ selectedWord }}"</span>
      <span v-else>Mistakes: {{ wrongGuesses.length }}/{{ maxWrong }}</span>
    </p>

    <button @click="resetGame">🔁 Restart</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const words = ['vue', 'javascript', 'hangman', 'frontend', 'developer']
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

const selectedWord = ref(randomWord())
const guessedLetters = ref([])

const maxWrong = 6

const wrongGuesses = computed(() =>
  guessedLetters.value.filter(l => !selectedWord.value.includes(l.toLowerCase()))
)

const winner = computed(() =>
  selectedWord.value.split('').every(l => guessedLetters.value.includes(l.toUpperCase()))
)

const loser = computed(() => wrongGuesses.value.length >= maxWrong)
const gameOver = computed(() => winner.value || loser.value)

function randomWord() {
  return words[Math.floor(Math.random() * words.length)].toUpperCase()
}

function guess(letter) {
  guessedLetters.value.push(letter)
}

function resetGame() {
  selectedWord.value = randomWord()
  guessedLetters.value = []
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
.letters button {
  margin: 4px;
  padding: 8px 12px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
}
.letters button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.status {
  margin: 1rem 0;
  font-size: 1.2rem;
}
</style>

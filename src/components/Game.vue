<template>
  <div class="game">
    <h1>Tic Tac Toe</h1>
    <div class="board">
      <div
        v-for="(cell, index) in board"
        :key="index"
        class="cell"
        @click="makeMove(index)"
      >
        {{ cell }}
      </div>
    </div>
    <div class="info">
      <p v-if="winner">🎉 {{ winner }} wins!</p>
      <p v-else-if="isDraw">😅 It's a draw!</p>
      <p v-else>Current Turn: {{ currentPlayer }}</p>
      <button @click="resetGame">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const board = ref(Array(9).fill(''))
const currentPlayer = ref('X')
const winner = ref(null)

const winCombos = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]          
]

const makeMove = (index) => {
  if (board.value[index] || winner.value) return

  board.value[index] = currentPlayer.value
  checkWinner()
  currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
}

const checkWinner = () => {
  for (const combo of winCombos) {
    const [a, b, c] = combo
    if (
      board.value[a] &&
      board.value[a] === board.value[b] &&
      board.value[a] === board.value[c]
    ) {
      winner.value = board.value[a]
      return
    }
  }
}

const isDraw = computed(() => {
  return board.value.every(cell => cell) && !winner.value
})

const resetGame = () => {
  board.value = Array(9).fill('')
  currentPlayer.value = 'X'
  winner.value = null
}
</script>

<style scoped>
.game {
  text-align: center;
  font-family: sans-serif;
}
.board {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  gap: 5px;
  justify-content: center;
  margin: 20px auto;
}
.cell {
  width: 80px;
  height: 80px;
  font-size: 2rem;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.cell:hover {
  background: #ddd;
}
.info {
  margin-top: 10px;
}
button {
  margin-top: 10px;
  padding: 5px 15px;
}
</style>

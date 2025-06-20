import { createRouter, createWebHistory } from 'vue-router';
import Home from '../features/home/Home.vue';
import TicTacToe from '../features/tictactoe/TicTacToe.vue';
import WordGame from '../features/wordgame/WordGame.vue';
import PhraseGame from '../features/wordgame/PhraseGame.vue';
import { ROUTE_NAMES } from './NamedRoute'


const routes = [
  { path: '/', component: Home, name: ROUTE_NAMES.HOME,},
  { path: '/tictactoe', component: TicTacToe, name: ROUTE_NAMES.TICTACTOE,},
  { path: '/wordGame', component: WordGame,name: ROUTE_NAMES.WORDGAME,},
  { path: '/phraseGame', component: PhraseGame,name: ROUTE_NAMES.PHRASEGAME,},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

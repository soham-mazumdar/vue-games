import { createRouter, createWebHistory } from 'vue-router';
import Home from '../features/home/Home.vue';
import TicTacToe from '../features/tictactoe/TicTacToe.vue';
import WordGame from '../features/wordgame/WordGame.vue';
import GOT from '../features/wordgame/GOT.vue';
import { ROUTE_NAMES } from './NamedRoute'


const routes = [
  { path: '/', component: Home, name: ROUTE_NAMES.HOME,},
  { path: '/tictactoe', component: TicTacToe, name: ROUTE_NAMES.TICTACTOE,},
  { path: '/wordGame', component: WordGame,name: ROUTE_NAMES.WORDGAME,},
  { path: '/got', component: GOT,name: ROUTE_NAMES.GOT,},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

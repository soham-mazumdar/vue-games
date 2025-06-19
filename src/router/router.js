import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Games from '../components/Games.vue';
import TicTacToe from '../components/TicTacToe.vue';
import WordGame from '../components/WordGame.vue';
import { ROUTE_NAMES } from './NamedRoute'


const routes = [
  { path: '/', component: Home, name: ROUTE_NAMES.HOME,},
  { path: '/games', component: Games,name: ROUTE_NAMES.GAMES,},
  { path: '/tictactoe', component: TicTacToe, name: ROUTE_NAMES.TICTACTOE,},
  { path: '/wordGame', component: WordGame,name: ROUTE_NAMES.WORDGAME,},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

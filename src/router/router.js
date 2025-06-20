import { createRouter, createWebHistory } from "vue-router";
import Home from "../features/home/Home.vue";
import Login from "../features/home/Login.vue";
import TicTacToe from "../features/games/tictactoe/TicTacToe.vue";
import WordGame from "../features/games/wordgame/WordGame.vue";
import GOT from "../features/games/wordgame/GOT.vue";
import { ROUTE_NAMES } from "./NamedRoute";
import Dashboard from "@/features/dashboard/Dashboard.vue";
import { auth } from '../firebase';


const routes = [
  {
    path: "/",
    component: Home,
    name: ROUTE_NAMES.HOME,
  },
  {
    path: "/login",
    component: Login,
    name: ROUTE_NAMES.LOGIN,
  },
  {
    path: "/tictactoe",
    component: TicTacToe,
    name: ROUTE_NAMES.TICTACTOE,
  },
  {
    path: "/wordGame",
    component: WordGame,
    name: ROUTE_NAMES.WORDGAME,
  },
  {
    path: "/got",
    component: GOT,
    name: ROUTE_NAMES.GOT,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: ROUTE_NAMES.DASHBOARD,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Guard
router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !user) {
    next('/login');
  } else if (to.path === '/login' && user) {
    next('/dashboard'); // If logged in, redirect away from login
  } else {
    next();
  }
});

export default router;

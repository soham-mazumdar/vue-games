<template>
  <div
    class="min-vh-100 d-flex justify-content-center align-items-center text-center"
  >
    <div>
      <h1>Login / Register</h1>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
            />
          </svg>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          v-model="email"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-lock"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
            /></svg
        ></span>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary" @click="login">
          Login
        </button>
        <button type="button" class="btn btn-outline-primary" @click="register">
          Register
        </button>
      </div>
      <!-- <input v-model="email" placeholder="Email" /> -->
      <!-- <input v-model="password" type="password" placeholder="Password" /> -->
      <!-- <button class="btn btn-primary" @click="login">Login</button>
    <button class="btn btn-primary" @click="register">Register</button> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { ROUTE_NAMES } from "@/router/NamedRoute";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push(ROUTE_NAMES.DASHBOARD);
  } catch (err) {
    alert(err.message);
  }
};

const register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push(ROUTE_NAMES.DASHBOARD);
  } catch (err) {
    alert(err.message);
  }
};
</script>

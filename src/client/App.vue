<script setup>
import { RouterLink } from "vue-router";
import logo from "./assets/surfm8.svg";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>

<template>

  <head>
    <title>SURFM8</title>
  </head>


  <div class="bg-primary-200 min-h-20 flex items-center px-5 justify-between ">
    <div class="hover:cursor-pointer flex items-center ">
      <img class="logo" :src="logo" alt="SURFM8" />
      <p class="h1-1 font-bold text-gray-700 ">
        SURFM8
      </p>
    </div>

    <div>
      <RouterLink to="/sign-in">
        Sign in
      </RouterLink>
    </div>
  </div>

  <!-- <p>
    <strong>Current route path :</strong> {{ $route.path }}
  </p>
  <nav>
    <RouterLink to=" /">Home</RouterLink>
        <RouterLink to="/sign-in">sign-in</RouterLink>
        </nav> -->


  <main class="flex-1 container">
    <RouterView />
  </main>


  <footer class="bg-primary-750 text-gray-700 p-4 align-bottoms">
    <div class="content-center text-center">
      2025 © SURFM8
    </div>
  </footer>
  <VueQueryDevtools />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

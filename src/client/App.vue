
<template>
  <head>
    <title>SURFM8</title>
  </head>

  <p>
    <strong>Current route path :</strong> {{ $route.path }}
  </p>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/sign-in">sign-in</RouterLink>
  </nav>
 
  
  <main>
    <RouterView />
  </main>
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

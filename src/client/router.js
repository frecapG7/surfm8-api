import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Signin from "./components/users/Signin.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/sign-in",
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

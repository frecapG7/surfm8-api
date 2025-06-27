import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import SignIn from "./components/users/SignIn.vue";
import SignUp from "./components/users/SignUp.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/sign-in",
    component: SignIn,
  },
  {
    path: "/sign-up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

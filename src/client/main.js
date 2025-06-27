import "./style.css";

import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(VueQueryPlugin).mount("#app");

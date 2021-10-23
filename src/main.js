import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { createWebHistory, createRouter } from "vue-router";
import Status from "@/Status.vue";
import Demo from "@/Demo.vue";

const routes = [
  {
    path: "/",
    name: "Status",
    component: Status,
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')

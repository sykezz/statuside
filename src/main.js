import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { createWebHistory, createRouter } from "vue-router";
import Status from "@/Status.vue";
import Demo from "@/Demo.vue";
import Dashboard from "@/Dashboard.vue";

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
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')

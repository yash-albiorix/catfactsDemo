import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue")
  },
  {
    path: "/cats",
    name: "Cats",
    component: () => import("../components/Cats.vue")
  }
];

const router = createRouter({
  history: createWebHistory("/"),
  routes
});

export default router;

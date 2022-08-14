import { createRouter, createWebHistory } from "vue-router";
import DetailCardView from "../views/DetailCardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DetailCardView,
    },
  ],
});

export default router;

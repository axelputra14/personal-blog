import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VNView from "@/views/VNView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: HomeView,
    },
    {
      path: "/",
      name: "homepage",
      component: HomeView,
    },
    {
      path: "/vn-list",
      name: "vnlist",
      component: VNView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name == "NotFound") {
    next("/");
  } else {
    next();
  }
});

export default router;

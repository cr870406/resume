import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "homePage",
    //   component: () => import("../views/homePage.vue"),
    // },
    {
      path: "/",
      name: "resume",
      component: () => import("../views/resume.vue"),
    },
  ],
});

export default router;

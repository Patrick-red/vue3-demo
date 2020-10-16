const HelloWorld = () => import("../components/HelloWorld.vue");
const Compostion = () => import("../components/compostion.vue");

import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/Compostion",
    },
    {
      path: "/Index",
      component: HelloWorld,
    },
    {
      path: "/Compostion",
      component: Compostion,
    },
  ],
});

export default router;

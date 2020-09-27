import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Index from "../views/index/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/thought",
    name: "thought",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/thought/Thought.vue")
  },
  {
    path: "/about-me",
    name: "about-me",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about-me/AboutMe.vue")
  },
  {
    path: "/contact-me",
    name: "contact-me",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/contact-me/ContactMe.vue"
      )
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

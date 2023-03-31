import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeAgain.vue";
import Contact from "@/views/Contact.vue";
import Project from "@/views/Project.vue";
import About from "@/views/About.vue";
import Detail from "@/views/Detail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/projets",
      name: "projets",
      component: Project,
    },
    {
      path: "/projets/:name",
      name: "projet",
      component: Project,
      params: true,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/project/:name",
      name: "detail",
      component: Detail,
      params: true,
    },
  ],
});

export default router;

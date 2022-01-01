import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Search from "@/views/Search.vue";
import Favorites from "@/views/Favorites.vue";
import Info from "@/views/Info.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

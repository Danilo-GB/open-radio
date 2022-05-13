import { createRouter, createWebHistory } from "vue-router";
import Search from "@/views/Search.vue";
import Favorites from "@/views/Favorites.vue";
import Info from "@/views/Info.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
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
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

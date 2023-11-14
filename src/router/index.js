import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostDetail from "../views/PostDetail.vue";
import CreatePage from "@/views/CreatePage.vue";
import TagPage from "../views/TagPage.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },
  {
    path: "/create",
    name: "CreatePage",
    component: CreatePage,
  },
  {
    path: "/tags/:keyword",
    name: "TagPage",
    component: TagPage,
    props: true,
  },

  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

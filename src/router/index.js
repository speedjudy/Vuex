import { createWebHistory, createRouter } from "vue-router";
import SignIn from "@/views/auth/SignIn.vue";
import SignUp from "@/views/auth/SignUp.vue";
import Home from "@/views/Home.vue";
import Category from "@/views/categories/index.vue";
import Wizard from "@/views/Wizard.vue";
import Product from "@/views/products";
import About from "@/views/About.vue";
import Favorite from "@/views/favorites/Favorite.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    component: SignIn,
    meta: { layout: 'auth' }
  },
  {
    path: "/signup",
    component: SignUp,
    meta: { layout: 'auth' }
  },
  {
    path: "/home",
    component: Home,
    layout: 'welcome'
  },
  {
    path: "/category",
    component: Category,
    layout: 'welcome'
  },
  {
    path: "/product",
    component: Product,
    layout: 'welcome'
  },
  {
    path: "/wizard",
    component: Wizard,
    layout: 'welcome'
  },
  {
    path: "/favorite",
    component: Favorite,
    layout: 'welcome'
  },
  {
    path: "/about",
    component: About,
    layout: 'welcome'

  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
    layout: 'welcome'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
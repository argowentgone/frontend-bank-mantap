import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pinjaman/:id",
    component: () => import("@/views/Pinjaman/Pinjaman"),
    children: [
      {
        path: "/pinjaman/pensiun",
        name: "Pensiun",
        component: () => import("@/views/Pinjaman/Pensiun"),
      },
      {
        path: "/pinjaman/ritel",
        name: "Ritel",
        component: () => import("@/views/Pinjaman/Ritel"),
      },
      {
        path: "/pinjaman/mikro",
        name: "Mikro",
        component: () => import("@/views/Pinjaman/Mikro"),
      },
    ],
  },
  {
    path: "/simpanan",
    name: "Simpanan",
    component: () => import("@/views/Simpanan/Simpanan"),
  },
  {
    path: "/program",
    name: "Program",
    component: () => import("@/views/Program/Program"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/artikel",
    name: "Artikel",
    component: () => import("@/views/Artikel/Artikel"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Admin/Login"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Admin/Dashboard/Dashboard"),
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/404", name: "404", component: () => import("@/views/NotFound") },
  { path: "*", redirect: "/404" },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

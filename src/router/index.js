import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaqPage from "../views/FaqPage.vue"
import ContactView from "../views/ContactView.vue"
import ModulesView from "../views/ModulesView.vue"
import PageNotFound from "../views/PageNotFound.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqPage
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: ContactView
  },
  {
    path: '/modules',
    name: 'modules',
    component: ModulesView
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: PageNotFound,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

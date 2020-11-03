import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Default from "@/layouts/Default";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: Default, color: 'beige' }
  },
  {
    path: '/we-are-different',
    name: 'WeAreDifferent',
    component: () => import('../views/WeAreDifferent.vue'),
    meta: { layout: Default }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

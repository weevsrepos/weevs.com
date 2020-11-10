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
  },
  {
    path: '/terms-conditions',
    name: 'Terms',
    component: () => import('../views/Terms.vue'),
    meta: { layout: Default }
  },
  {
    path: '/privacy-policy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue'),
    meta: { layout: Default }
  },
  {
    path: '/hire-us',
    name: 'HireUs',
    component: () => import('../views/HireUs.vue'),
    meta: { layout: Default }
  },
  {
    path: '/join-us',
    name: 'JoinUs',
    component: () => import('../views/JoinUs.vue'),
    meta: { layout: Default }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  return next();
})

export default router

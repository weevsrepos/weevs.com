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
    path: '/contact-us',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: { layout: Default }
  },
  {
    path: '/insights',
    name: 'Insights',
    component: () => import('../views/Insights.vue'),
    meta: { layout: Default, color: 'light-gray' }
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

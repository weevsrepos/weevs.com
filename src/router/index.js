import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Default from "@/layouts/Default";
import AdminDefault from "@/layouts/AdminDefault";
import AdminDashboard from "@/layouts/AdminDashboard";
const VueScrollTo = require('vue-scrollto');

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
  },
  {
    path: '/publication',
    name: 'Publication',
    component: () => import('../views/Publication.vue'),
    meta: { layout: Default }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Login.vue'),
    meta: { layout: AdminDefault }
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: () => import('../views/admin/dashboard/Index.vue'),
    meta: { layout: AdminDashboard }
  },
  {
    path: '/admin/publications',
    name: 'AdminPublications',
    component: () => import('../views/admin/dashboard/Publications.vue'),
    meta: { layout: AdminDashboard }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  VueScrollTo.scrollTo(document.getElementsByTagName('body'),{
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
  });
  return next();
})

export default router

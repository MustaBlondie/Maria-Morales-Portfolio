import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/pages/AboutPage.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/components/pages/ProjectsPage.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/components/pages/ContactPage.vue'),
  },
  {
    path: '/curriculum',
    name: 'Cv',
    component: () => import('@/components/pages/CvPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

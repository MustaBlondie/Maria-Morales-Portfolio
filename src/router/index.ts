import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/sections/HeaderAndHeroSection.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/sections/AboutSection.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/components/sections/ProjectsSection.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/components/sections/ContactSection.vue'),
  },
  {
    path: '/curriculum',
    name: 'Cv',
    component: () => import('@/components/sections/CvSection.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

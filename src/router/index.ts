import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/HomePage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

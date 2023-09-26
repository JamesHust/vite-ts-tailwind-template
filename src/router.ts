import { createRouter, createWebHistory } from 'vue-router'

// @ts-ignore
import IndexPage from '@/pages/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

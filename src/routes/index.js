import { createRouter, createWebHistory } from 'vue-router'
import Hero from '@/components/Hero.vue'
import Ordered from '@/components/Ordered.vue'


const routes = [
  {
    path: '/',
    name: 'Hero',
    component: Hero
  },
  {
    path: '/ordered',
    name: 'Ordered',
    component: Ordered
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/pages/Main.vue'
import Profile from '@/components/pages/Profile.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes });

export default router;

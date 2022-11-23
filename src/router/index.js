import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import Profile from '@/pages/Profile.vue'

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

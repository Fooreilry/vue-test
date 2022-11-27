import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Profile from '@/views/Profile.vue'
import ProfilePage1 from '@/views/ProfilePage1.vue'
import ProfilePage2 from '@/views/ProfilePage2.vue'
import FormUserInformation from '@/components/FormUserInformation.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/profile',
    component: Profile,
    children: [
    {
      path: '',
      component: FormUserInformation
    },
    {
      path: '/profile_page1',
      component: ProfilePage1
    },
    {
      path: '/profile_page2',
      component: ProfilePage2
    },
    ]
  },


]

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes });

export default router;

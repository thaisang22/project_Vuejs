import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Edit from '../views/Edit.vue'
import UserLogin from '../views/LoginUserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Edit/:id',
    name: 'edit',
    component: Edit
  },
  {
    path: '/User',
    name: 'user',
    component: UserLogin
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router



import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Edit from '../views/admin/Edit.vue'
import UserLogin from '../views/user/LoginUserView.vue'
import NotFound from '@/components/NotFound.vue'
import adduser from '@/components/global_admin/add.vue'
import IndexView from '@/views/admin/index.vue' // Thêm dòng này




const routes = [
  // user
  {
    path: '/',
    name: 'useradmin',
    component: UserLogin, // Sử dụng IndexView
    children: [
      { path: '/home', name: 'home', component: HomeView },// edit
      { path: "/adduser", name: 'adduser', component: adduser }// not found
    ]
  },


    // ---------------------------------------------------------------------------------------------------------
  // notfound page 404
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },


  // ---------------------------------------------------------------------------------------------------------
  // amin
  {
    path: '/admin',
    name: 'indexadmin',
    component: IndexView, // Sử dụng IndexView
    children: [
      { path: '/Edit/:id', name: 'edit', component: Edit },// edit
      { path: "/adduser", name: 'adduser', component: adduser }// not found
    ]
  }

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router



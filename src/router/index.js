import { createRouter, createWebHistory } from 'vue-router'
// user
import HomeView from '../views/HomeView.vue'
// import UserLogin from '../views/user/LoginUserView.vue'
import IndexUserView from '../views/user/index.vue'

// ----------------------------------------------------------------
// admin
import AddUser from '@/components/global_admin/add.vue'
import IndexView from '../views/admin/index.vue' 
import Edit from '@/components/global_admin/edit.vue'
import ListUser from '@/components/global_admin/list_user.vue'
import AddScore from '@/components/global_admin/addscore.vue'
import AddObject from '@/components/global_admin/add_object.vue'
import AddNotificate from '@/components/global_admin/add_notification.vue'
import studentscore from '@/components/StudentScores.vue'
import List_accouts from '@/components/global_admin/list_accouts.vue'

// ----------------------------------------------------------------
// khác
import NotFound from '@/components/NotFound.vue'


const routes = [
  // user
  {
    path: '/',
    name: 'useradmin',
    component: IndexUserView, // Sử dụng IndexView
    children: [
      { path: '/home', name: 'home', component: HomeView },// edit
      { path: "/adduser", name: 'adduser', component: AddUser }// not found
    ]
  },

  {
    path: '/tracuuitc',
    name: 'studentscore',
    component: studentscore
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
      { path: '/admin/edit/:id', name: 'edit', component: Edit },// edit
      { path: "/admin/adduser", name: 'adduser', component: AddUser },
      { path: "/admin/listaccout", name: 'List_accout', component: List_accouts },// add
      { path: "/admin/listuser", name: 'listuser', component: ListUser },// list
      { path: "/admin/addscore", name: 'AddScore', component: AddScore },// add điểm
      { path: "/admin/addobject", name: 'AddObject', component: AddObject },// add học phần
      { path: "/admin/addnotificate", name: 'AddNotificate', component: AddNotificate }// add thông báo

    ]
  }

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router



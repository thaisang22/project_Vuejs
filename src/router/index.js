import { createRouter, createWebHistory } from 'vue-router'
// user
// import UserLogin from '../views/user/LoginUserView.vue'
import IndexUserView from '../views/user/index.vue'
import StudentScore from '@/components/StudentScores.vue'
import StudentInfo from '@/components/StudentInfo.vue'

// ----------------------------------------------------------------
// admin
import AddUser from '@/components/global_admin/add.vue'
import IndexView from '../views/admin/index.vue' 
import Edit from '@/components/global_admin/edit.vue'
import ListUser from '@/components/global_admin/list_user.vue'
import AddScore from '@/components/global_admin/addscore.vue'
import AddObject from '@/components/global_admin/add_object.vue'
import AddNotificate from '@/components/global_admin/add_notification.vue'
// ----------------------------------------------------------------
// khác
import NotFound from '@/components/NotFound.vue'

const routes = [
  // user
  {
    path: '/sinhvien',
    name: 'useradmin',
    component: IndexUserView, 
    children: [
      { path: "/sinhvien/thongtin", name: 'StudentInfo', component: StudentInfo },
      { path: "/sinhvien/diem", name: 'StudentScore', component: StudentScore },
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
      { path: '/admin/edit/:id', name: 'edit', component: Edit },// edit
      { path: "/admin/adduser", name: 'adduser', component: AddUser },// add
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



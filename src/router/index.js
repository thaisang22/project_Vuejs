import { createRouter, createWebHistory } from 'vue-router'
// user
// import UserLogin from '../views/user/LoginUserView.vue'
import IndexUserView from '../views/user/index.vue'
import StudentInfo from '@/components/StudentInfo.vue'
import StudentScores from '@/components/StudentScores.vue'
import LoginUser from '@/components/UserLogin.vue'
import RegisterObject from '@/components/RegisterObject.vue'
import RegisteredOJ from '@/components/RegisteredOJ.vue'
// ----------------------------------------------------------------
// admin
import AddUser from '@/components/global_admin/add.vue'
import IndexView from '../views/admin/index.vue'
import Edit from '@/components/global_admin/edit.vue'
import ListUser from '@/components/global_admin/list_user.vue'
import AddScore from '@/components/global_admin/addscore.vue'
import AddObject from '@/components/global_admin/add_object.vue'
import AddNotificate from '@/components/global_admin/add_notification.vue'
import List_accouts from '@/components/global_admin/list_accouts.vue'
import Edit_Module from '@/components/global_admin/edit_object.vue'
import Login_admin from '@/components/global_admin/login_admin.vue'

// ----------------------------------------------------------------
// khác
import NotFound from '@/components/NotFound.vue'

import { projectAuth ,searchUserByUidAndRole , searchAdminByUidAndRole} from '@/firebase'

const requireAuth = async (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user) {
    alert("Bạn cần đăng nhập để truy cập trang này!");
    next({ name: "Login", params: {} });
  } else {
    // Lấy thông tin người dùng từ cơ sở dữ liệu dựa trên UID
    try {
      const userData = await searchUserByUidAndRole(user.uid);
      if (!userData || userData.role !== 0) {
        alert("Bạn không có quyền truy cập vào trang này!");
        next(from); // Quay lại trang trước đó nếu không có quyền truy cập
      } else {
        next(); // Cho phép truy cập nếu có quyền
      }
    } catch (error) {
      console.error("Lỗi khi kiểm tra vai trò người dùng:", error);
      next(from); // Quay lại trang trước đó nếu xảy ra lỗi
    }
  }
}
const requireAuthAdmin = async (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user) {
    alert("Bạn cần đăng nhập để truy cập trang này!");
    next({ name: "loginadmin", params: {} });
  } else {
    // Lấy thông tin người dùng từ cơ sở dữ liệu dựa trên UID
    try {
      const userData = await searchAdminByUidAndRole(user.uid);
      if (!userData || userData.role !== 1) {
        alert("Bạn không có quyền truy cập vào trang này!");
        next(from);// Quay lại trang trước đó nếu không có quyền truy cập
      } else {
        next(); // Cho phép truy cập nếu có quyền
      }
    } catch (error) {
      console.error("Lỗi khi kiểm tra vai trò người dùng:", error);
      next(from);// Quay lại trang trước đó nếu xảy ra lỗi
    }
  }
}


const routes = [
  // user
  {
    path: '/sinhvien',
    name: '',
    component: IndexUserView,
    children: [
      { path: "/sinhvien/thongtin", name: 'studentinfo', component: StudentInfo },
      { path: '/sinhvien/diem', name: 'studentscores', component: StudentScores },
      { path: '/sinhvien/dangkyhocphan', name: 'registerobject', component: RegisterObject },
      { path: '/sinhvien/hocphandadangky', name: 'registeredOJ', component: RegisteredOJ },
    ],
    beforeEnter: requireAuth,
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginUser, // Sử dụng IndexView
  },
 

  // ---------------------------------------------------------------------------------------------------------
  // notfound page 404
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },

  { path: "/admin/loginadmin", name: 'loginadmin', component: Login_admin },
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
      { path: '/admin/edit_module/:id', name: 'edit_module', component: Edit_Module },// edit
      { path: "/admin/addobject", name: 'AddObject', component: AddObject },// add học phần
      { path: "/admin/addnotificate", name: 'AddNotificate', component: AddNotificate }// add thông báo

    ],
    beforeEnter: requireAuthAdmin,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
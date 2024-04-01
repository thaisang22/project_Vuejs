<template>
    <div class="login-box" style="margin: 0 auto ;padding-top:30px">
      <div class="card">
        <div class="card-header">
          <h3><b>Admin</b> PAGE</h3>
        </div>
        <div class="card-body">
          <p class="text-center">Vui lòng đăng nhập để vào trang quản trị viên</p>
          <form @submit.prevent="login" method="post">
            <div class="mb-3">
              <input type="email" class="form-control" v-model="email" placeholder="Email" required>
              <span v-if="!isValidEmail" class="text-danger">Email không hợp lệ</span>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" v-model="password" placeholder="Mật khẩu" required>
           
            </div>
  
            <div class="mb-3">
              <button type="submit" class="btn btn-primary">Đăng nhập</button>
            </div>
          </form>
          <div class="text-center">
            <p v-if="error" class="text-danger">{{ error }}</p>
          </div>
          <p class="mt-3 mb-1 text-center">
            <a href="#">Quên mật khẩu</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import { searchAdminByEmailAndRole } from '@/firebase'
  
  export default {
    name: 'LoginComponent',
    setup() {
      const email = ref('')
      const password = ref('')
      const error = ref(null)
      const isValidEmail = ref(true)
      const isValidPassword = ref(true)
      const store = useStore()
      const router = useRouter()
  
      const login = async () => {
        try {
          isValidEmail.value = validateEmail(email.value)
  
          if (isValidEmail.value && isValidPassword.value) {
            const checkAdmin = await searchAdminByEmailAndRole(email.value)
            if (checkAdmin) {
              await store.dispatch('logIn', {
                email: email.value,
                password: password.value
              })
              router.push('/admin/addscore')
            } else {
              error.value = 'Email hoặc mật khẩu không đúng.'
            }
          }
        } catch (err) {
          error.value = err.message
        }
      }
  
      const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
      }
  
  
      return { login, email, password, error, isValidEmail }
    }
  }
  </script>
  
  <style scoped>
  /* Your styling here */
  </style>
  
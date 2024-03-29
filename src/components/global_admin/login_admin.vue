<template>
 

    <div class="login-box">
        <div class="card">
            <div class="card-header">
                <h3><b>Admin</b> PAGE</h3>
            </div>
            <div class="card-body">
                <p class="text-center">Vui lòng đăng nhập để vào trang quản trị viên</p>
                <form @submit.prevent="Login" method="post">
                    <div class="mb-3">
                        <input type="text" class="form-control" v-model="email" placeholder="Email">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" v-model="password" placeholder="Mật khẩu">
                    </div>

                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Đăng nhập</button>
                    </div>
                </form>
                <div class="text-center">
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
import { searchAdminByEmailAndRole } from '@/firebase';

export default {
  name: "LoginComponent",
    setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
const showHeaderFooter = ref(false);
    const store = useStore()
    const router = useRouter()

    const Login = async () => {
      try {
        const CheckAdmin = searchAdminByEmailAndRole(email.value)
        if (CheckAdmin){
            await store.dispatch('logIn', {
          email: email.value,
          password: password.value
        })
        router.push('/admin/addscore')
      }
        }
      catch (err) {
        error.value = err.message
      }
    }
    return { Login, email, password, error, showHeaderFooter }
  }
};
</script>


<style scoped>
    body {
        background-color: #f8f9fa;
        font-family: 'Source Sans Pro', sans-serif;
    }

    .login-box {
        margin-top: 100px;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }

    .login-box .card-header {
        background-color: #007bff;
        color: #fff;
        border-radius: 5px 5px 0 0;
        padding: 15px;
        text-align: center;
    }

    .login-box .card-body {
        padding: 30px;
    }

    .login-box .form-control {
        border-radius: 3px;
    }

    .login-box .btn-primary {
        background-color: #007bff;
        border: none;
        border-radius: 3px;
        padding: 10px;
        width: 100%;
    }

    .login-box .btn-primary:hover {
        background-color: #0056b3;
    }

    .main-header {
        display: none;
    }

    .main-footer {
        display: none;
    }

    .main-sidebar {
        display: none;
    }
</style>

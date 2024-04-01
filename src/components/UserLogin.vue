<template>
    <div>
        <input name="__RequestVerificationToken" type="hidden"
            value="McIDPLA6RMDCX9NCMTnXRWQjrp98b-jIa_k8HT-LeCpejQcI0UXBoBEoK3kZFIJZr4bk2b5e1u_k3P0GSVc8-l1X_JgUqpkbpMDhLoA5-Bk1" />
        <div class="">
            <div class="loader">
                <div class="shadow"></div>
                <div class="box"></div>
            </div>
        </div>
        <section class="login-area">
            <div class="row m-0">
                <div class="col-lg-5 col-md-12 p-0">
                    <div class="login-image">
                        <img src="../Content/img/login-bg.jpg" alt="image">
                    </div>
                </div>
                <div class="col-lg-7 col-md-12 p-0" style="background-color: #1d9df23d">
                    <div class="login-content d-flex align-items-center justify-content-center">
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div class="login-form">
                                    <div class="logo">
                                        <a href="/"><img src="../Content/img/logo.png" class="login-logo"></a>
                                    </div>
                                    <h3>Cổng Thông Tin Sinh Viên</h3>
                                    <p>Đăng nhập hệ thống</p>
                                    <form novalidate="novalidate" id="login_signin_form"  @submit.prevent="Login">
                                        <div class="form-group">
                                            <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="email"
                    placeholder="Email của bạn"
                  />
                                        </div>
                                        <div class="form-group">
                                            <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="password"
                    placeholder="Mật khẩu"
                  />
                                        </div>
                                        <button type="submit" class="btn-login mt-4"> Đăng nhập</button>
                                        <a type="submit" class=""> <router-link class="dropdown-item" to="/resetpassword">Quên mật khẩu</router-link></a>
                                        <!-- Display error message if login fails -->
                                        <p v-if="error" class="text-danger">{{ error }}</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { searchUserByEmailAndRole } from '@/firebase';

export default {
  name: "LoginComponent",
    setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const Login = async () => {
      try {
        const checkUserRole =  searchUserByEmailAndRole(email.value);
        if (!email.value || !password.value) {
          error.value = "Vui lòng điền đầy đủ thông tin."
          return;
        }
        if (checkUserRole) { 
          await store.dispatch('logIn', {
            email: email.value,
            password: password.value
          })
          router.push('/sinhvien/thongtin')
        }
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { Login, email, password, error }
  }
};
</script>


<style>
.container {
    height: 100vh;
}

.login-content {
    height: 100%;
}

.login-logo {
    width: 150px;
}

.full-width .ubermenu-nav, .container, .row {
    max-width: 100%;
}
/*================================================
Login CSS
=================================================*/
.login-image {
    height: 100%;
    width: 100%;
    background-image: url(../Content/img/login-bg.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    -moz-background-size: 100% 100%;
    -o-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
}

.login-image img {
    display: none;
}

.login-content {
    height: 100vh;
}

.login-content .login-form {
    text-align: center;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.d-table-cell {
    vertical-align: middle;
}

.login-content .login-form .logo {
    margin-bottom: 30px;
}

.login-content .login-form .logo a {
    display: inline-block;
}

.login-content .login-form h3 {
    margin-bottom: 0;
    font-size: 35px;
    font-weight: 700;
}

.login-content .login-form p {
    margin-top: 8px;
    margin-bottom: 0;
}

.login-content .login-form p a {
    display: inline-block;
}

.login-content .login-form form {
    margin-top: 35px;
}

.login-content .login-form form .form-control {
    background-color: #ffffff;
    color: #252525;
    border: none;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    -webkit-box-shadow: 0px 5px 28.5px 1.5px rgba(149, 152, 200, 0.2) !important;
    box-shadow: 0px 5px 28.5px 1.5px rgba(149, 152, 200, 0.2) !important;
    height: 55px;
    font-size: 15px;
}

.login-content .login-form form .form-control::-webkit-input-placeholder {
    -webkit-transition: 0.5s;
    transition: 0.5s;
}

.login-content .login-form form .form-control:-ms-input-placeholder {
    -webkit-transition: 0.5s;
    transition: 0.5s;
}

.login-content .login-form form .form-control::-ms-input-placeholder {
    -webkit-transition: 0.5s;
    transition: 0.5s;
}

.login-content .login-form form .form-control::placeholder {
    -webkit-transition: 0.5s;
    transition: 0.5s;
}

.login-content .login-form form .form-control:focus::-webkit-input-placeholder {
    color: transparent;
}

.login-content .login-form form .form-control:focus:-ms-input-placeholder {
    color: transparent;
}

.login-content .login-form form .form-control:focus::-ms-input-placeholder {
    color: transparent;
}

.login-content .login-form form .form-control:focus::placeholder {
    color: transparent;
}

.login-content .login-form form .btn-login {
    -webkit-transition: 0.5s;
    transition: 0.5s;
    display: block;
    width: 100%;
    padding: 13px 25px 12px 25px;
    position: relative;
    background-color: #1971ac;
    color: #ffffff;
    -webkit-box-shadow: 0px 5px 28.5px 1.5px rgba(255, 97, 47, 0.2);
    box-shadow: 0px 5px 28.5px 1.5px rgba(255, 97, 47, 0.2);
    border-width: 2px;
    border-style: solid;
    border-color: #1971ac;
    border-radius: 5px;
    font-size: 14.5px;
    font-weight: 700;
    cursor: pointer;
}

.login-content .login-form form .btn-login:hover,
.login-content .login-form form .btn-login:focus {
    background-color: #0eb582;
    color: #ffffff;
    border-color: #0eb582;
}

.parsley-required {
    padding-top: 7px;
    color: orangered !important;
}

.parsley-error {
    border: thin solid #f0643b !important;
    border-color: #f0643b !important;
}

.login-content .login-form form .forgot-password {
    text-align: right;
    margin-top: 20px;
}

.login-content .login-form form .forgot-password a {
    display: inline-block;
    color: #1971ac;
    text-decoration: underline;
}

.login-content .login-form form .forgot-password a:hover {
    color: #0eb582;
}

.login-content .login-form form .connect-with-social {
    margin-top: 20px;
}

.login-content .login-form form .connect-with-social button {
    display: block;
    width: 100%;
    position: relative;
    border: 1px solid #1971ac;
    background-color: transparent;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    padding: 12px 30px;
    border-radius: 2px;
    color: #1971ac;
    font-weight: 500;
}

.hidden {
    display: none !important
}

.login-content .login-form form .connect-with-social button i {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 15px;
    font-size: 20px;
}

.login-content .login-form form .connect-with-social button.facebook {
    border-color: #3b5998;
    color: #3b5998;
}

.login-content .login-form form .connect-with-social button.facebook:hover {
    background-color: #3b5998;
    color: #ffffff;
    border-color: #3b5998;
}

.login-content .login-form form .connect-with-social button.twitter {
    margin-top: 10px;
    border-color: #1da1f2;
    color: #1da1f2;
}

.login-content .login-form form .connect-with-social button.twitter:hover {
    background-color: #1da1f2;
    color: #ffffff;
    border-color: #1da1f2;
}

.login-content .login-form form .connect-with-social button:hover {
    background-color: #1971ac;
    color: #ffffff;
    border-color: #1971ac;
}
</style>
/* eslint-disable */ // eslint-disable-next-line
<template>
  <div class="content-wrapper ">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Thêm thông tin cho sinh viên</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Add USER</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- Main content -->
    <section class="content ">
      <div class="container">
        <div class="">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Tạo tài khoản cho sinh viên</h3>
              <div class="card-tools">
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="card-body">
              <div v-if="error" class="alert alert-danger">{{error}}</div>
              <div v-if="successMessage" class="alert alert-primary">{{successMessage}}</div>
              <form action="" @submit.prevent="Register">
                <div class="form-group">
                <label for="">Display Name</label>
                <input
                  v-model="name"
                  class="form-control"
                  type="text"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="">Email</label>
                <input
                  type="text"
                  v-model="email"
                  class="form-control"
                  required
                />
              </div>
              <i v-if="displayErrorMessage" class="alert alert-primary">{{displayErrorMessage}}</i>
              <div class="form-group mt-3">
                <label for="">password</label>
                <input
                  type="text"
                  v-model="password"
                  class="form-control"
                  required
                />
              </div>

              <button type="submit" class="btn btn-success mt-3">
                Create User
              </button>
              </form>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { searchUserByEmail } from '@/firebase'

export default {
  name: "RegisterUserComponent",
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const successMessage = ref(null)
    const displayErrorMessage = ref(null) // Define displayErrorMessage here
    const store = useStore()

    const Register = async () => {
  try {
    const CheckEmail = await searchUserByEmail(email.value);
    if (CheckEmail) {
   // Email đã tồn tại trong cơ sở dữ liệu
   displayErrorMessage.value = "Email đã tồn tại";
      email.value = '';
    } else {
            // Email không tồn tại trong cơ sở dữ liệu
            await store.dispatch('register', {
        email: email.value,
        password: password.value,
        name: name.value
      });
      
      name.value = '';
      email.value = '';
      password.value = '';
    }
    successMessage.value = 'Registration successful!';
  } catch (err) {
    // Xử lý lỗi và hiển thị thông báo lỗi
    error.value = err.message;
    displayErrorMessage.value = "Đã xảy ra lỗi trong quá trình đăng ký";
  }
}



    return { Register, name, email, password, error, successMessage, displayErrorMessage }
  },
};
</script>



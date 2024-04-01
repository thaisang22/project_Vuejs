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
                  <label for="name">Display Name (Max 25 characters)</label>
                  <input
                    v-model="name"
                    class="form-control"
                    type="text"
                    required
                    maxlength="25"
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="password">Password (Min 8 characters)</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    required
                    minlength="8"
                  />
                </div>
              
                <button type="submit" class="btn btn-success mt-3 ">
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
import { useStore  } from 'vuex'
// import { useRoute } from 'vue-router';

export default {
  name:"RegisterUserComponent",
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const successMessage = ref(null) // New ref for success message

    const store = useStore()
// const router = useRoute()
    const Register = async () => {
      try {
        
        await store.dispatch('register', {
          email: email.value,
          password: password.value,
          name: name.value
        })

        // Set success message and clear form fields
        successMessage.value = 'Registration successful!'
        name.value = ''
        email.value = ''
        password.value = ''
        this.$router.push({path:'/admin/listuser'});
      } catch (err) {
        error.value = err.message
      }
    }

    return { Register, name, email, password, error, successMessage }
  }
};

</script>

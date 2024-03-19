/* eslint-disable */ // eslint-disable-next-line
<template>
  <div class="content-wrapper ">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>SỬA DANH SÁCH SINH VIÊN</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">EDIT USER</li>
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
              <h3 class="card-title">Edit thông tin cho sinh viên</h3>
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
              <form action="" @submit.prevent="onSubmit">
                <div class="form-group">
                <label for="">fullname</label>
                <input
                  v-model="form.name"
                  class="form-control"
                  type="text"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="">Email</label>
                <input
                  type="text"
                  v-model="form.email"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="">Code_user</label>
                <input
                  type="text"
                  v-model="form.code_user"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="">address</label>
                <input
                  type="text"
                  v-model="form.address"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="">Phone Number</label>
                <!-- Corrected typo -->
                <input
                  type="text"
                  v-model="form.phone"
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
import { reactive, computed , onMounted } from 'vue';
import {  useRoute , useRouter} from 'vue-router';
import { getUser , updateUser } from '@/firebase';

export default {
  name: "EditView",
  setup() {
    const router = useRouter(); // Fixed typo: changed `userRouter` to `useRouter`
    const route = useRoute(); // Fixed typo: changed `userRoute` to `useRoute`
    const userId = computed(() => route.params.id);

    const form = reactive({ name:'',email:''});

    onMounted(async () => {
      const user = await getUser(userId.value);
      form.name = user.name;
      form.email = user.email;
    });

    const update = async () => {
    
      await updateUser(userId.value, form);
 
      router.push('/');
    };

    return { form, update };
  }
};
</script>


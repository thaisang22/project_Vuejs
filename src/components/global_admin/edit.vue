<template>
  <div class="content-wrapper">
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
    <section class="content">
      <div class="container">
        <div>
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Chỉnh sửa thông tin sinh viên</h3>
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
              <form action="" @submit.prevent="update">
                <div class="form-group">
                  <label for="">Mã số sinh viên</label>
                  <input
                    v-model="form.codeuser"
                    class="form-control"
                    type="text"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="">Họ và tên</label>
                  <input
                    type="text"
                    v-model="form.fullName"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="">Ngày sinh</label>
                  <input
                    type="date"
                    v-model="form.dateuser"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="">Địa chỉ</label>
                  <input
                    type="text"
                    v-model="form.address"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="">Quê</label>
                  <input
                    type="text"
                    v-model="form.local_address"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="">Số điện thoại</label>
                  <input
                    type="text"
                    v-model="form.phone"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="">Ngành đào tạo</label>
                  <input
                    type="text"
                    v-model="form.major"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="">Ngành chính</label>
                  <input
                    type="text"
                    v-model="form.majorMain"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="">Lớp</label>
                  <input
                    type="text"
                    v-model="form.classuser"
                    class="form-control"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-success mt-3">
                  Cập nhật
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
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getUser, updateUser } from '@/firebase';

export default {
  name: "EditView",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const userId = route.params.id;
    
    const form = reactive({
      codeuser: '',
      fullName: '',
      dateuser: '',
      address: '',
      local_address:'',
      phone: '',
      major: '',
      majorMain: '',
      classuser: ''
    });

    onMounted(async () => {
      const user = await getUser(userId);
      form.codeuser = user.codeuser;
      form.fullName = user.fullName;
      form.dateuser = user.dateuser;
      form.address = user.address;
      form.local_address = user.local_address;
      form.phone = user.phone;
      form.major = user.major;
      form.majorMain = user.majorMain;
      form.classuser = user.classuser;
    });

    const update = async () => {
      await updateUser(userId, form);
      router.push('/admin/listuser');
    };

    return { form, update };
  }
};
</script>

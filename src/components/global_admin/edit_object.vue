<template>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>SỬA DANH SÁCH CÁC HỌC PHẦN</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">EDIT HỌC PHẦN</li>
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
                <h3 class="card-title">Chỉnh sửa thông tin học phần</h3>
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
                <form @submit.prevent="update">
                  <div class="form-group mt-3">
                    <label for="name">Tên học phần</label>
                    <input
                      type="text"
                      id="name"
                      v-model="form.name"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="credit">Tín chỉ</label>
                    <input
                      type="number"
                      id="credit"
                      v-model="form.credit"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="className">Lớp</label>
                    <input
                      type="text"
                      id="className"
                      v-model="form.className"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="quantity">Số lượng</label>
                    <input
                      type="number"
                      id="quantity"
                      v-model="form.quantity"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="dateStart">Ngày bắt đầu</label>
                    <input
                      type="date"
                      id="dateStart"
                      v-model="form.dateStart"
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="dateEnd">Ngày kết thúc</label>
                    <input
                      type="date"
                      id="dateEnd"
                      v-model="form.dateEnd"
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
  import { getModule, updateModule } from '@/firebase';
  
  export default {
    name: "EditView",
    setup() {
      const router = useRouter();
      const route = useRoute();
      const id = route.params.id;
      const form = reactive({
        name: '',
        credit: '',
        className: '',
        quantity: '',
        dateStart: '',
        dateEnd: ''
      });
  
      onMounted(async () => {
        const user = await getModule(id);
        form.name = user.name;
        form.credit = user.credit;
        form.className = user.className;
        form.quantity = user.quantity;
        form.dateStart = user.dateStart;
        form.dateEnd = user.dateEnd;
      });
  
      const update = async () => {
        await updateModule(id, form);
        router.push('/admin/addobject');
      };
  
      return { form, update };
    }
  };
  </script>
  
  <style scoped>
  /* CSS cho component này nếu cần */
  </style>
  
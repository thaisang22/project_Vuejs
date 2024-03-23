/* eslint-disable */ // eslint-disable-next-line
<template>
  <div class="">
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Bảng điểm sinh viên</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">DataTables</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <div class="row">

            <div class="col-3">
              <div class="">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Nhập thông tin cho sinh viên mới</h3>
                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <form action="" @submit.prevent="onSubmit">
                      <div class="form-group mt-3">
                        <label for="">Mã Số Sinh Viên</label>
                        <input type="text" v-model="form.code_user" class="form-control" required />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">HỌC PHẦN</label>
                        <div class="input-group">
                          <select v-model="form.module" class="form-control" required>
                            <option value="" disabled selected>Chọn học phần</option>
                            <option value="hocphan1">Học phần 1</option>
                            <option value="hocphan2">Học phần 2</option>
                            <option value="hocphan3">Học phần 3</option>
                            <!-- Thêm các option khác tương ứng với danh sách học phần của bạn -->
                          </select>

                          <div class="input-group-append">
                            <span class="input-group-text"><i class="fas fa-chevron-down"></i></span>
                          </div>
                        </div>
                      </div>

                      <div class="form-group mt-3">
                        <label for="">ĐIỂM TX 1</label>
                        <input type="text" v-model="form.address" class="form-control" required />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">ĐIỂM TX 2</label>
                        <input type="text" v-model="form.address" class="form-control" required />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">ĐIỂM GIỮA KỲ</label>
                        <input type="text" v-model="form.address" class="form-control" required />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">ĐIỂM CUỐI KỲ</label>
                        <!-- Corrected typo -->
                        <input type="text" v-model="form.phone" class="form-control" required />
                      </div>
                      <button type="submit" class="btn btn-success mt-3">
                        ADD
                      </button>
                    </form>
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
              </div>
            </div>
            <div class="col-9">
              <div class="card">
                <!-- /.card-header -->
                <div class="card-body">
                  <table id="example2" class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>MSSV</th>
                        <th>HP</th>
                        <th>TX 1</th>
                        <th>TX 2</th>
                        <th>GK</th>
                        <th>CK</th>
                        <th>TB</th>
                        <th>KQ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="{ id, code_user, name, email, phone, address } in users" :key="id">
                        <td>{{ code_user }}501220203</td>
                        <td>{{ name }}Nguyễn Thế Mạnh</td>
                        <td>{{ email }}OPP </td>
                        <td>{{ phone }}0327532755</td>
                        <td>{{ address }}53 trịnh đình thảo</td>
                        <td>{{ address }}</td>
                        <td>{{ address }}</td>
                        <td>
                          <router-link :to="`/admin/edit/${id}`">
                            <button class="btn btn-primary btn-sm me-2">
                              Edit
                            </button>
                          </router-link>
                          <button class="btn btn-primary btn-sm me-2" @click="deleteUser(id)">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
              <!-- /.card -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
  </div>
</template>

<script>
import { createUser } from "@/firebase.js";
import { reactive } from "vue";

export default {
  name: "addUser",
  setup() {
    const form = reactive({
      name: "",
      email: "",
      code_user: "",
      address: "",
      phone: "", // Corrected numer to ''
    });

    const onSubmit = async () => {
      await createUser({ ...form });
      form.name = "";
      form.email = "";
      form.code_user = ""; // Clear code_user as well
      form.address = ""; // Clear address as well
      form.phone = ""; // Clear phone as well
    };

    return { form, onSubmit };
  },
};
</script>

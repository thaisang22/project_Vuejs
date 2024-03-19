/* eslint-disable */ // eslint-disable-next-line
<template>
  <div class="content-wrapper">
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
    <section class="content">
      <div class="row">
        <div class="col-md-6">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Nhập thông tin cho sinh viên mới</h3>
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

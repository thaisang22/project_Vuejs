/* eslint-disable */ // eslint-disable-next-line
<template>
  <div class="content-wrapper ">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Thêm học phần</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Add object</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
          <div class="row">
            <section class="content col-3 ">
                <div class="container">
                  <div class="">
                    <div class="card card-primary">
                      <div class="card-header">
                        <h3 class="card-title">Nhập học phần</h3>
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
                          <label for="">Name Object</label>
                          <input
                            v-model="form.name"
                            class="form-control"
                            type="text"
                            required
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="">Tín chỉ</label>
                          <input
                            type="number"
                            v-model="form.email"
                            class="form-control"
                            required
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="">Teacher</label>
                          <input
                            type="text"
                            v-model="form.code_user"
                            class="form-control"
                            required
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="">Class</label>
                          <input
                            type="text"
                            v-model="form.address"
                            class="form-control"
                            required
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="">date start</label>
                          <!-- Corrected typo -->
                          <input
                            type="date"
                            v-model="form.phone"
                            class="form-control"
                            required
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="">date end</label>
                          <!-- Corrected typo -->
                          <input
                            type="date"
                            v-model="form.phone"
                            class="form-control"
                            required
                          />
                        </div>
                        <button type="submit" class="btn btn-success mt-3">
                          Create
                        </button>
                        </form>
                      </div>
                      <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                  </div>
                </div>
            </section>
            <!--list  -->
            <div class="col-8">
                <div class="card">
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="example2" class="table table-bordered table-hover">
                      <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name ObJect</th>
                        <th>Tín chỉ</th>
                        <th>teacher</th>
                        <th>class</th>
                        <th>date satrt</th>
                        <th>date end</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr  v-for="{id,code_user,name,email,phone,address} in users" :key="id">
                        <td>{{code_user}}501220203</td>
                        <td>{{name}}Nguyễn Thế Mạnh</td>
                        <td>{{email}}OPP </td>
                        <td>{{phone}}0327532755</td>
                        <td>{{address}}53 trịnh đình thảo</td>
                        <td>{{address}}</td>
                        <td>{{address}}</td>
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

<template>
  <div class="content-wrapper">
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
          <section class="content col-3">
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
                          v-model="form.credit"
                          class="form-control"
                          required
                          min="0"
                          title="Tín chỉ phải là số không âm"
                        />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">Teacher</label>
                        <input
                          type="text"
                          v-model="form.teacher"
                          class="form-control"
                          required
                          pattern="[a-zA-Z\s]*"
                          title="Giáo viên không được chứa ký tự đặc biệt hoặc số"
                        />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">Class</label>
                        <input
                          type="text"
                          v-model="form.className"
                          class="form-control"
                          required
                        />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">Date start</label>
                        <input
                          type="date"
                          v-model="form.dateStart"
                          class="form-control"
                          required
                        />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">Date end</label>
                        <input
                          type="date"
                          v-model="form.dateEnd"
                          class="form-control"
                          required
                          :min="form.dateStart"
                          title="Ngày kết thúc phải sau ngày bắt đầu"
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
          <!-- List -->
          <div class="col-9">
            <div class="card">
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th style="width: 20%">Name Object</th>
                      <th style="width: 8%">Tín chỉ</th>
                      <th style="width: 15%">Teacher</th>
                      <th style="width: 15%">Class</th>
                      <th style="width: 5%">Số lượng</th>
                      <th style="width: 10%">Date Start</th>
                      <th style="width: 10%">Date End</th>
                      <th style="width: 17%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="{
                        id,
                        name,
                        credit,
                        teacher,
                        quantity,
                        className,
                        dateStart,
                        dateEnd,
                      } in modules"
                      :key="id"
                    >
                      <td>{{ name }}</td>
                      <td>{{ credit }}</td>
                      <td>{{ teacher }}</td>
                      <td>{{ className }}</td>
                      <td>{{ quantity }}</td>
                      <td>{{ dateStart }}</td>
                      <td>{{ dateEnd }}</td>
                      <td>
                        <router-link :to="`/admin/edit_module/${id}`">
                          <button class="btn btn-primary btn-sm me-2">
                            Edit
                          </button>
                        </router-link>
                        <button
                          class="btn btn-primary btn-sm me-2"
                          @click="deleteModule(id)"
                        >
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
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
</template>


<script>
import { createModule } from "@/firebase.js";
import { reactive } from "vue";
import { useLoadmodules, deleteModule } from "@/firebase.js";

export default {
  name: "addObject",
  setup() {
    const modules = useLoadmodules();

    const form = reactive({
      name: "",
      credit: 0,
      teacher: "",
      className: "",
      dateStart: null,
      dateEnd: null,
    });

    const onSubmit = async () => {
      await createModule({ ...form });
      form.name = "";
      form.credit = 0;
      form.teacher = "";
      form.className = "";
      form.dateStart = null;
      form.dateEnd = null;
    };

    return { form, onSubmit, modules, deleteModule };
  },
};
</script>

<style>
.content {
  text-transform: capitalize;
}
</style>
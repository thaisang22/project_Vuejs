<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>danh sách sinh viên</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">DataTables</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <button @click="exportToExcel('Users', 'Users')" class="btn btn-success mb-3">
          Export to Excel
        </button>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Mã số sinh viên</th>
                      <th>Họ tên</th>
                      <th>Email</th>
                      <th>Số điện thoại</th>
                      <th>Quê Quán</th>
                      <th>Địa chỉ</th>
                      <th>Ngày sinh</th>
                      <th>Lớp</th>
                      <th>Ngành Đào tạo</th>
                      <th>Chuyên ngành</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="{
                      id,
                      codeuser,
                      fullName,
                      email,
                      phone,
                      local_address,
                      address,
                      major,
                      majorMain,
                      dateuser,
                      classuser,
                    } in users" :key="id">
                      <td>{{ codeuser }}</td>
                      <td>{{ fullName }}</td>
                      <td>{{ email }}</td>
                      <td>{{ phone }}</td>
                      <td>{{ local_address }}</td>
                      <td>{{ address }}</td>
                      <td>{{ dateuser }}</td>
                      <td>{{ classuser }}</td>
                      <td>{{ major }}</td>
                      <td>{{ majorMain }}</td>
                      <td>
                        <router-link :to="`/admin/edit/${id}`">
                          <button class="btn btn-primary btn-sm me-2">
                            Cập nhật thông tin
                          </button>
                        </router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useLoadUsers } from "@/firebase";
import { utils, writeFile } from "xlsx";

export default {
  name: "Listuser_admin",
  setup() {
    const users = useLoadUsers();

    function exportToExcel(fileName, sheetName) {
      if (users.length === 0) {
        console.error("Chưa có data");
        return;
      }

      const columnMapping = {
        email: "Email",
        fullName: "Tên đầy đủ",
        majorMain: "Ngành chính",
        address: "Địa chỉ",
        codeuser: "Mã số sinh viên",
        local_address: "Địa chỉ địa phương",
        dateuser: "Ngày sinh",
        classuser: "Lớp",
        phone: "Số điện thoại",
        major: "Ngành",
      };

      const selectedData = users.value.map((user) => {
        const selectedUser = {};
        Object.keys(columnMapping).forEach((key) => {
          selectedUser[columnMapping[key]] = user[key];
        });
        return selectedUser;
      });

      const ws = utils.json_to_sheet(selectedData);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, sheetName);
      writeFile(wb, `${fileName}.xlsx`);
    }

    return { users, exportToExcel };
  },
};
</script>

<style lang="scss" scoped>
</style>

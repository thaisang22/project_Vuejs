<!-- eslint-disable vue/valid-template-root -->
// eslint-disable-next-line vue/valid-template-root, vue/valid-template-root
<template>
    <!-- /.content-wrapper -->
<div class="">
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
          </div><!-- /.container-fluid -->
        </section>
    
        <!-- Main content -->
        <section class="content">
          <div class="container-fluid">
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
                      <tr v-for="{id,codeuser,fullName,email,phone,local_address,address,major,majorMain,dateuser,classuser} in users" :key="id">
                        <td>{{codeuser}}</td>
                        <td>{{fullName}}</td>
                        <td>{{email}} </td>
                        <td>{{phone}}</td>
                        <td>{{local_address}}</td>
                        <td>{{address}}</td>
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
import { deleteUser , useLoadUsers } from '@/firebase';

export default {
    
  name: "Listuser_admin",
  
  setup() {
        const users = useLoadUsers()
        return { users , deleteUser}
    }

};
</script>

<style lang="scss" scoped>


</style>

<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <!-- Your content header code -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>UID</th>
                      <th>Email</th>
                      <th>Full Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in users" :key="user.uid">
                      <td>{{ user.uid }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.displayName }}</td>
                      <td>
                        <router-link :to="`/admin/edit/${user.uid}`">
                          <button class="btn btn-primary btn-sm me-2">Update Information</button>
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
import { getAllUsers } from '@/composable/admin.js';

export default {
  name: 'Listuser_admin',
  data() {
    return {
      users: []
    };
  },
  async created() {
    try {
      // Lấy danh sách người dùng từ Firebase Authentication
      this.users = await getAllUsers();
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  }
};
</script>

<style scoped>
/* Your scoped styles here */
</style>

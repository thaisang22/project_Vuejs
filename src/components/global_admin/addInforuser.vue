<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <!-- Content Header -->
    </section>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container">
        <div>
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Thêm thông tin cho sinh viên</h3>
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
              <!-- Thông báo lỗi -->
              <div v-if="error" class="alert alert-danger">{{ error }}</div>
              <!-- Thông báo thành công -->
              <div v-if="successMessage" class="alert alert-primary">{{ successMessage }}</div>
              <form @submit.prevent="Register" novalidate>
                <div class="form-group">
                  <label for="name">MSSV</label>
                  <input
                    id="name"
                    v-model="mssv"
                    class="form-control"
                    type="text"
                    pattern="[0-9]{1,10}" 
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <label for="point">Điểm</label>
                  <input
                    id="point"
                    type="number"
                    v-model="point"
                    class="form-control"
                    min="0"
                    max="10" 
                    step="0.01"
                    required
                  />
                </div>

                <button type="submit" class="btn btn-success mt-3">Tạo Sinh viên</button>
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
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "RegisterUserComponent",
  setup() {
    const mssv = ref('');
    const point = ref('');
    const error = ref(null);
    const successMessage = ref(null);

    const store = useStore();

    const Register = async () => {
      try {
        if (!mssv.value || !point.value) {
          error.value = "Vui lòng điền đầy đủ thông tin.";
          return;
        }

        // Kiểm tra mssv có phải là số hay không
        const mssvPattern = /^[0-9]+$/;
        if (!mssvPattern.test(mssv.value)) {
          error.value = "MSSV chỉ được chứa các chữ số.";
          return;
        }

        await store.dispatch('register', {
          mssv: mssv.value,
          point: point.value
        });

        successMessage.value = 'Tạo sinh viên thành công!';
        // Xóa dữ liệu sau khi tạo thành công
        mssv.value = '';
        point.value = '';
        // Xóa thông báo lỗi sau khi tạo thành công
        error.value = null;
      } catch (err) {
        error.value = err.message;
      }
    }

    return { Register, mssv, point, error, successMessage }
  }
};
</script>

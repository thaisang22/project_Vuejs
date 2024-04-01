<template>
  <div class="container">
    <div class="content-wrapper">
      <section class="content">
        <!-- Form for creating new notification -->
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card card-outline card-info">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h3 class="card-title">New Notification</h3>
                <a class="btn btn-success ms-auto" href="/admin/addnotificate_user">Thông báo cho user</a>
              </div>
              <div class="card-body">
                <form @submit.prevent="onSubmit">
                  <div class="form-group">
                    <input
                      v-model="form.heading"
                      class="form-control"
                      type="text"
                      name="heading"
                      placeholder="Nhập tiêu đề"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      v-model="form.content"
                      class="form-control"
                      name="content"
                      rows="5"
                      placeholder="Nhập nội dung"
                      required
                    ></textarea>
                  </div>
                  <div class="card-footer">
                    <div class="text-right">
                      <button class="btn btn-success" :disabled="isSubmitting">
                        Xác nhận
                      </button>
                      <template v-if="isSubmitting">
                        <span class="ml-2">Submitting...</span>
                      </template>
                    </div>
                  </div>
                </form>
                <div
                  v-if="submissionSuccess"
                  class="alert alert-success"
                  role="alert"
                >
                  Tạo thông báo thành công
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- List of notifications -->
      <div class="card p-3">
        <h4>Danh sách các thông báo</h4>
        <div class="notification-list">
          <div
            class="d-flex notification"
            v-for="{ heading, content, id, datetime } in notices"
            :key="id"
          >
            <div class="notification-content">
              <h3>{{ heading }}</h3>
              <p>{{ content }}</p>
              <p>{{ formatDateTime(datetime) }}</p>
            </div>
            <button
              class="btn btn-primary btn-sm ms-auto me-2 text-right delete-button"
              @click="confirmDelete(id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createnotice, deleteNotice, useLoadNotice } from "@/firebase.js";
import { reactive, ref } from "vue";

export default {
  name: "addNotification",
  setup() {
    const form = reactive({
      heading: "",
      content: "",
      datetime: new Date().toISOString(),
    });

    const isSubmitting = ref(false);
    const submissionSuccess = ref(false);

    const onSubmit = async () => {
      if (!form.heading || !form.content) {
        alert("Vui lòng nhập tiêu đề và nội dung.");
        return;
      }

      isSubmitting.value = true;

      try {
        await createnotice({ ...form });
        submissionSuccess.value = true;
        setTimeout(() => {
          form.heading = "";
          form.content = "";
          submissionSuccess.value = false;
          isSubmitting.value = false;
        }, 1000);
      } catch (error) {
        console.error("Error creating notification:", error);
        isSubmitting.value = false;
      }
    };

    const confirmDelete = (id) => {
      if (confirm("Bạn có chắc muốn xóa thông báo này không?")) {
        deleteNotice(id);
      }
    };

    const notices = useLoadNotice();

    const formatDateTime = (datetime) => {
      const date = new Date(datetime);
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      return formattedDate;
    };

    return {
      form,
      onSubmit,
      isSubmitting,
      submissionSuccess,
      notices,
      deleteNotice,
      formatDateTime,
      confirmDelete,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.content-wrapper {
  background-color: #f8f9fa;
  padding: 20px;
}

.card-header {
  background-color: #007bff;
  color: white;
}
</style>
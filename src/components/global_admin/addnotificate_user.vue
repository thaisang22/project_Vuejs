<template>
    <div class="container">
        <div class="content-wrapper">
            <section class="content">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card card-outline card-info">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <h3 class="card-title">New Notification</h3>
                            </div>

                            <div class="card-body">
                                <form @submit.prevent="onSubmit">
                                    <div class="form-group">
                                        <input v-model="form.code_user" class="form-control" type="text"
                                            name="code_user" placeholder="Nhập mã sinh viên">
                                    </div>
                                    <div class="form-group">
                                        <input v-model="form.heading_user" class="form-control" type="text"
                                            name="heading" placeholder="Nhập tiêu đề">
                                    </div>
                                    <div class="form-group">
                                        <textarea v-model="form.content_user" class="form-control" name="content"
                                            rows="5" placeholder="Nhập nội dung"></textarea>
                                    </div>
                                    <div class="card-footer">
                                        <div class="text-right">
                                            <button class="btn btn-primary" :disabled="isSubmitting">Xác nhận</button>
                                            <template v-if="isSubmitting">
                                                <span class="ml-2">Submitting...</span>
                                            </template>
                                        </div>
                                    </div>
                                </form>
                                <div v-if="submissionSuccess" class="alert alert-success" role="alert">
                                    Tạo thông báo thành công
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div class="card p-3">
                <h4>Danh sách các thông báo</h4>
                <div class="notification-list">
                    <div class="d-flex notification"
                        v-for="{ id, code_user, heading_user, content_user, datetime_user } in notices_user" :key="id">
                        <div class="notification-content">
                            <h3>{{ heading_user }}</h3>
                            <p>{{ code_user }}</p>
                            <p>{{ content_user }}</p>
                            <p>{{ formatDateTime(datetime_user) }}</p>
                        </div>
                        <button class="btn btn-primary btn-sm ms-auto me-2 text-right delete-button"
                            @click="confirmDelete(id)">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNotice_User, deleteNotice_User, useLoadNotice_User } from "@/firebase.js";
import { reactive, ref } from "vue";


export default {
    name: "addNotification",

    setup() {
        const form = reactive({
            code_user: "",
            heading_user: "",
            content_user: "",
            datetime_user: new Date().toISOString(),
        });

        const isSubmitting = ref(false); // flag
        const submissionSuccess = ref(false);

        const onSubmit = async () => {
            isSubmitting.value = true;

            try {
                await createNotice_User({ ...form });
                submissionSuccess.value = true;

                setTimeout(() => {
                    form.heading_user = "";
                    form.code_user = "";
                    form.content_user = "";
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
                deleteNotice_User(id);
            }
        };

        const notices_user = useLoadNotice_User();
        const formatDateTime = (datetime_user) => {
            const date = new Date(datetime_user);
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            return formattedDate;
        };

        return { form, onSubmit, isSubmitting, submissionSuccess, notices_user, formatDateTime, confirmDelete, deleteNotice_User };
    },

};
</script>
<style>
.btn-group-sm>.btn, .btn-sm {
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
    height: 50%;
}
</style>
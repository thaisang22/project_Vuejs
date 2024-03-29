<template>
  <div class="container">
    <div class="content-wrapper">
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card card-outline card-info">
              <div class="card-header">
                <h3 class="card-title">New Notification</h3>
              </div>
              <div class="card-body">
                <form @submit.prevent="onSubmit">
                  <div class="form-group">
                    <input v-model="form.heading" class="form-control" type="text" name="heading" placeholder="Nhập tiêu đề">
                  </div>
                  <div class="form-group">
                    <textarea v-model="form.content" class="form-control" name="content" rows="5" placeholder="Nhập nội dung"></textarea>
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
                  Notification created successfully!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { createnotice } from "@/firebase.js";
import { reactive, ref } from "vue";

export default {
  name: "addNotification",
  setup() {
    const form = reactive({
      heading: "",
      content: "",
      datetime: new Date().toISOString(), 
    });

    const isSubmitting = ref(false); // flag
    const submissionSuccess = ref(false); 

    const onSubmit = async () => {
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

    return { form, onSubmit, isSubmitting, submissionSuccess };
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

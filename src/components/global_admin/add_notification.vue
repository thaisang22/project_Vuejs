/* eslint-disable */ // eslint-disable-next-line
<template>
  <div class="">
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Text Editors</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Text Editors</li>
              </ol>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-outline card-info">
              <div class="card-header">
                <h3 class="card-title">New Notification</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <textarea
                  class="form-control"
                  id="code_preview0"
                  name=""
                  style="height: 300px"
                ></textarea>
              </div>
              <div class="card-footer">
                Visit
                <a href="https://github.com/summernote/summernote/"
                  >Summernote</a
                >
                documentation for more examples and information about the
                plugin.
              </div>
            </div>
          </div>
          <!-- /.col-->
        </div>
        <!-- ./row -->
        <!-- <div class="row">
          <div class="col-md-12">
            <div class="card card-outline card-info">
              <div class="card-header">
                <h3 class="card-title">CodeMirror</h3>
              </div>
          
              <div class="card-body p-0">
                <textarea id="codeMirrorDemo" class="p-3">
                    <div class="info-box bg-gradient-info">
                    <span class="info-box-icon"><i class="far fa-bookmark"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Bookmarks</span>
                        <span class="info-box-number">41,410</span>
                        <div class="progress">
                        <div class="progress-bar" style="width: 70%"></div>
                        </div>
                        <span class="progress-description">
                        70% Increase in 30 Days
                        </span>
                    </div>
                    </div>
              </textarea
                >
              </div>
              <div class="card-footer">
                Visit
                <a href="https://codemirror.net/">CodeMirror</a> documentation12:44/-strong/-heart:>:o:-((:-hfor more examples and information about the plugin.
              </div>
            </div>
          </div>
       
        </div> -->
  
      </section>
 
    </div>
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
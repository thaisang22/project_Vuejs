<template>
  <div class="wrapper">
    <header_admin />
    <router-view />
    <footer_admin />
  </div>
</template>
  
<script>
import header_admin from "@/components/global_admin/header.vue";
import footer_admin from "@/components/global_admin/footer.vue";
export default {
  name: "IndexView",
  components: {
    header_admin,
    footer_admin,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/dist/css/adminlte.min.css";
@import "@/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
@import "@/assets/plugins/jqvmap/jqvmap.min.css";
@import "@/assets/dist/css/adminlte.min.css";
@import "@/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
@import "@/assets/plugins/daterangepicker/daterangepicker.css";
@import "@/assets/plugins/summernote/summernote-bs4.min.css";

</style>
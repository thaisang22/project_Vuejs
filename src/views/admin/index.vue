<template>
  <div>
    <!-- Sử dụng điều kiện để kiểm tra router và ẩn header và footer nếu router là /admin/loginadmin -->
    <header_admin :class="{ 'd-none': $route.path === '/admin/loginadmin' }"/>
    <router-view/>
    <footer_admin :class="{ 'd-none': $route.path === '/admin/loginadmin' }"/>
  </div>
</template>

<script>
import header_admin from '@/components/global_admin/header.vue';
import footer_admin from '@/components/global_admin/footer.vue';  

export default {
  name: "IndexView",
  components: {
    header_admin,
    footer_admin,
  
  }
};
</script>

<style>
/* Định nghĩa lớp d-none */
.d-none {
  display: none;
}
</style>

<template>
    <header_admin/>
    <footer_admin/>
  </template>
  
  <script>
  import header_admin from '@/components/global_admin/header.vue';
  import footer_admin from '@/components/global_admin/footer.vue';
  
  export default {
    name: "IndexView",
    components: {
      header_admin,
      footer_admin
    }
  };
  </script>
  
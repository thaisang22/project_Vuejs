<template>
  <div class="">
    <header_admin/>
    <userList/>
    <footer_admin/>
  </div>
   
  </template>
  
  <script>
  import header_admin from '@/components/global_admin/header.vue';
  import footer_admin from '@/components/global_admin/footer.vue';
  import userList from '@/components/UserList.vue';
  
  export default {
    name: "IndexView",
    components: {
      header_admin,
      footer_admin,
      userList
    }
  };
  </script>
  
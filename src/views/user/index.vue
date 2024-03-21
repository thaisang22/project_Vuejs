<template>
    <div class="">
      <header_user/>
      <router-view/>
      <footer_user/>
    </div>
     
    </template>
    
    <script>
    import header_user from '@/components/header.vue';
    import footer_user from '@/components/footer.vue';  
    export default {
      name: "IndexUserView",
      components: {
        header_user,
        footer_user,
      }
    };
  
  
  
  </script>
    
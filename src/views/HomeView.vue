<!-- eslint-disable-next-line vue/valid-template-root -->

<template>
  <div>
    <!-- <userCreate/> -->
    <userList/>
  </div>
</template>

<script>
// import userCreate from '../components/UserCreate';
import userList from '../components/UserList.vue';

export default {
  name: "HomeView",
  components: {
    // userCreate,
    userList
  }
};
</script>


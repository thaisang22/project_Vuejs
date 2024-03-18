<!-- eslint-disable-next-line vue/valid-template-root -->

<template>
  <userCreate/>
  <userList/>
</template>

<script>
import userCreate from '../components/UserCreate';
import userList from '../components/UserList.vue';

export default {
  name: "HomeView",
  components: {
    userCreate,
    userList
  }
};
</script>


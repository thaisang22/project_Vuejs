<template>
  <router-view/>
</template>



<style lang="scss" scoped>
@import "@/assets/plugins/fontawesome-free/css/all.min.css";
@import "@/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
///
/// user view
/// 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

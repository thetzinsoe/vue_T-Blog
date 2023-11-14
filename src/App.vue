<template>
  <div>
    <span><NavBar /></span>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style>
body {
  background: rgb(235, 233, 233);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
div {
  max-width: 800px;
  margin: 10px auto;
  background: white;
  padding: 10px;
}
</style>

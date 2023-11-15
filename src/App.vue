<template>
  <div>
    <NavBar />
    <router-view />
    <small>&copy; All right reserve | created at 4TZ</small>
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}
body::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: rgb(198, 245, 210)04) 80, 66);
}
div {
  max-width: 800px;
  margin: 10px auto;
  background: white;
  padding: 10px;
}
small {
  color: rgb(168, 188, 183);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  position: fixed;
  bottom: 0px;
  right: 0px;
  float: right;
}
</style>

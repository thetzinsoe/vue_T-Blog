<template>
  <div class="navbar">
    <router-link :to="{ name: 'HomeView' }">Home</router-link>
    <router-link :to="{ name: 'CreatePage' }">Create</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  display: flex;
  justify-content: end;
}
a {
  text-decoration: none;
  margin: 0px 15px;
  color: gray;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 5px;
}
a .router-link-active {
  color: red;
}
</style>

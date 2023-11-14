<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: "SpinnerWheel",
};
</script>

<style>
.spinner {
  width: 40px;
  height: 40px;
  border: 5px solid transparent;
  border-top-color: rgb(171, 166, 166);
  border-radius: 50%;
  margin: 40px auto;
  animation: spin 600ms infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

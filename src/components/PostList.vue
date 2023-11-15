<template>
  <span>
    <h2>Posts</h2>
    <div v-if="posts.length > 0">
      <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"></SinglePost>
      </div>
    </div>
    <div v-else><SpinnerWheel /></div>
  </span>
</template>

<script>
// import { ref } from "vue";
import SinglePost from "./SinglePost.vue";
import SpinnerWheel from "./SpinnerWheel.vue";
export default {
  props: ["posts"],
  components: { SinglePost, SpinnerWheel },
};
</script>

<style></style>

<template>
  <span>
    <h3 v-if="error">{{ error }}</h3>
    <div v-else class="tagcloud">
      <PostList :posts="posts"></PostList>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </span>
</template>

<script>
import TagCloud from "../components/TagCloud";
import getPost from "../composables/getPosts";
import PostList from "../components/PostList.vue";
export default {
  name: "HomeView",
  components: {
    TagCloud,
    PostList,
  },
  setup() {
    let { posts, load, error } = getPost();
    load();
    // console.log(posts);
    return { posts, error };
  },
};
</script>
<style>
.tagcloud {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}
</style>

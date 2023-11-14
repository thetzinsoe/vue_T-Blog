<template>
  <div class="detail">
    <h2>Detail</h2>
    <div v-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <span class="spantag" v-for="data in post.tag" :key="data"
        ><router-link :to="{ name: 'TagPage', params: { keyword: data } }">{{
          data
        }}</router-link></span
      >
    </div>
    <div v-else><SpinnerWheel /></div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import SpinnerWheel from "../components/SpinnerWheel.vue";
export default {
  name: "PostDetail",
  props: ["id"],
  components: {
    SpinnerWheel,
  },
  setup(props) {
    let { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style>
.detail {
  margin-left: 0px;
}
</style>

<template>
  <div class="tagcloud">
    <div>
      <h2>Tag - {{ keyword }}</h2>
      <PostList :posts="filterData"></PostList>
    </div>
    <TagCloud :posts="filterData"></TagCloud>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import PostList from "../components/PostList";
import getPosts from "@/composables/getPosts";
import { computed } from "vue";
export default {
  components: {
    TagCloud,
    PostList,
  },
  name: "TagPage",
  props: ["keyword"],
  setup(props) {
    let { posts, error, load } = getPosts();
    load();
    let filterData = computed(() => {
      return posts.value.filter((p) => {
        return p.tag.includes(props.keyword);
      });
    });
    return { posts, error, filterData };
  },
};
</script>

<style scoped>
div {
  margin-left: 0px;
}
</style>

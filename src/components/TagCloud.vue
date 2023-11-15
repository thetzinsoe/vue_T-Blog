<template>
  <div>
    <h2>Tag Cloud</h2>
    <div v-if="uniqueTag">
      <span v-for="tag in uniqueTag" :key="tag">
        <router-link :to="{ name: 'TagPage', params: { keyword: tag } }"
          ><span class="spantag">{{ tag }}</span></router-link
        >
      </span>
    </div>
    <div v-else><SpinnerWheel></SpinnerWheel></div>
  </div>
</template>

<script>
import SpinnerWheel from "./SpinnerWheel";
import { ref } from "vue";
import getPosts from "@/composables/getPosts";
export default {
  components: { SpinnerWheel },
  setup() {
    let tagData = ref([]);
    let uniqueTag = ref([]);
    let run = async () => {
      var { posts, error, load } = getPosts();
      await load();
      try {
        posts.value.forEach((post) => {
          post.tag.forEach((tag) => {
            tagData.value.push(tag);
          });
        });
        uniqueTag.value = tagData.value.filter((tag, index, array) => {
          return array.indexOf(tag) === index;
        });
      } catch {
        console.log(error);
      }
    };
    run();
    return { tagData, uniqueTag };
  },
};
</script>

<style scoped>
a,
span,
span > a {
  display: inline-block;
}
div span {
  display: inline-block;
}
</style>

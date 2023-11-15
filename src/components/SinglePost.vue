<template>
  <div>
    <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ cutPostBody }}</p>
    <!-- <span class="spantag" v-for="data in post.tag" :key="data">{{ data }}</span> -->
    <span v-for="data in post.tag" :key="data"
      ><router-link :to="{ name: 'TagPage', params: { keyword: data } }">
        <span class="spantag">{{ data }}</span>
      </router-link></span
    >
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "SinglePost",
  props: ["post"],
  setup(props) {
    let cutPostBody = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });
    return { cutPostBody };
  },
};
</script>

<style>
a h3 {
  color: rgb(27, 27, 158);
}
a {
  text-decoration: none;
  margin: 0px 15px;
  color: gray;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  font-family: monospace;
}
a.router-link-exact-active {
  color: #42b983;
}
</style>

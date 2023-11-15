<template>
  <div class="detail">
    <h2>Detail</h2>
    <div v-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <span v-for="data in post.tag" :key="data"
        ><router-link :to="{ name: 'TagPage', params: { keyword: data } }">
          <span class="spantag">{{ data }}</span>
        </router-link></span
      >
      <button class="delete" @click="deletePost">Delete</button>
    </div>
    <div v-else><SpinnerWheel /></div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import SpinnerWheel from "../components/SpinnerWheel.vue";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
export default {
  name: "PostDetail",
  props: ["id"],
  components: {
    SpinnerWheel,
  },
  setup(props) {
    let router = useRouter();
    let { post, error, load } = getPost(props.id);
    load();
    let deletePost = () => {
      alert("delete");
      let res = doc(db, "posts", props.id);
      deleteDoc(res);
      router.push("/");
    };
    return { post, error, deletePost };
  },
};
</script>

<style>
.detail {
  margin-left: 0px;
}
button.delete {
  width: 100px;
  background: crimson;
}
</style>

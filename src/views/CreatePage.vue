<template>
  <div class="post">
    <h2>Create Post</h2>
    <form @submit.prevent="postCreate">
      <label for="title">Post Title</label><br />
      <input type="text" id="title" v-model="title" required /><br />
      <label for="body">Post Body</label><br />
      <textarea id="body" rows="10" v-model="body" required></textarea><br />
      <label for="tag">Tag [ hit Enter to add Tag (or) skip ]</label><br />
      <input
        type="text"
        name=""
        id="tag"
        v-model="tag"
        @keydown.enter.prevent="enterTag"
      /><br />
      <span class="spantag" v-for="data in tags" :key="data">{{ data }}</span>
      <button>PostCreate</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
export default {
  setup() {
    let router = useRouter();
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);
    let enterTag = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    let postCreate = async () => {
      let newPost = {
        title: title.value,
        body: body.value,
        tag: tags.value,
        created_at: serverTimestamp(),
      };
      let res = collection(db, "posts");
      await addDoc(res, newPost);
      // await fetch("http://localhost:3000/posts", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     title: title.value,
      //     body: body.value,
      //     tag: tags.value,
      //   }),
      // });
      router.push({ name: "HomeView" });
    };
    return { title, body, tag, tags, enterTag, postCreate };
  },
};
</script>

<style>
div input,
textarea {
  margin: 10px;
  width: 90%;
  border-radius: 5px;
  border: 1px solid rgb(184, 183, 183);
}
div input {
  height: 25px;
}
div label {
  margin: 10px;
}
button {
  display: block;
  margin: 10px auto;
  padding: 5px;
  border-radius: 5px;
  background: rgb(0, 128, 70);
  color: white;
}
.spantag {
  display: inline-block;
  background: rgb(197, 197, 197);
  padding: 8px;
  color: white;
  margin: 5px;
  border-radius: 15px;
  cursor: pointer;
}
a.router-link-exact-active > .spantag {
  background-color: #42b983;
}
</style>

<template>
  <div class="post">
    <h2>Create Post</h2>
    <form @submit.prevent="postCreate">
      <label for="title">Post Title</label><br />
      <input type="text" id="title" v-model="title" required /><br />
      <label for="body">Post Body</label><br />
      <textarea id="body" rows="10" v-model="body" required></textarea><br />
      <label for="tag">Tag</label><br />
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
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: title.value,
          body: body.value,
          tag: tags.value,
        }),
      });
      router.push({ name: "HomeView" });
    };
    console.log(router);
    return { title, body, tag, tags, enterTag, postCreate };
  },
};
</script>

<style>
div input,
textarea {
  margin: 10px;
  width: 90%;
}
div label {
  margin: 10px;
}
button {
  display: block;
  margin: 10px auto;
}
.spantag {
  background: rgb(197, 197, 197);
  padding: 8px;
  color: white;
  margin-left: 10px;
  border-radius: 15px;
  cursor: pointer;
}
</style>

import { ref } from "vue";
let getPosts = () => {
  let posts = ref([]);
  let error = ref("");
  let load = async () => {
    try {
      let res = await fetch("  http://localhost:3000/posts");
      if (res.status === 404) {
        throw new Error("Page not foun!");
      }
      let data = await res.json();
      posts.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, load, error };
};
export default getPosts;

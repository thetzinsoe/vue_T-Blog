import { ref } from "vue";
// import { db } from "../firebase/config";
// import { collection } from "firebase/firestore";
let getPosts = () => {
  let posts = ref([]);
  let error = ref("");
  let load = async () => {
    try {
      // let res = db.collection("posts").get();
      // console.log(res);
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

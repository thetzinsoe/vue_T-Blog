import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
let getPosts = () => {
  let posts = ref([]);
  let error = ref("");
  let load = async () => {
    try {
      // let res = await fetch("  http://localhost:3000/posts");
      // if (res.status === 404) {
      //   throw new Error("Page not foun!");
      // }
      let res = query(collection(db, "posts"), orderBy("created_at", "desc"));
      onSnapshot(res, (r) => {
        posts.value = r.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
      });

      //normal fire store
      // let data = await getDocs(res);
      // posts.value = data.docs.map((post) => {
      //   return { id: post.id, ...post.data() };
      // });
      // console.log(posts);
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, load, error };
};
export default getPosts;

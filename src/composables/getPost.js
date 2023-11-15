import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";
import { db } from "@/firebase/config";
let getPost = (id) => {
  let post = ref(null);
  let error = ref("");
  let load = async () => {
    try {
      // let response = await fetch("http://localhost:3000/posts/" + id);
      let res = doc(db, "posts", id);
      let data = await getDoc(res);
      post.value = { id: data.id, ...data.data() };
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};
export default getPost;

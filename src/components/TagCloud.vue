<template>
  <div>
    <h2>Tag Cloud</h2>

    <!-- {{ uniqueTag }} -->
    <div v-for="tag in uniqueTag" :key="tag" class="spantag">
      {{ tag }}
    </div>
    {{ posts }}
  </div>
</template>

//
<script>
// import { ref } from "vue";
// import { toRefs } from "vue";
// export default {
//   props: ["posts"],
//   setup(props) {
//     const { posts } = toRefs(props);
//     let tagData = ref([]);
//     console.log(posts.array());
//     posts.value.forEach((e) => {
//       e.tag.forEach((tag) => {
//         tagData.value.push(tag);
//       });
//     });
//     let uniqueTag = tagData.value.filter((tag, index, array) => {
//       return array.indexOf(tag) === index;
//     });
//     return { tagData, uniqueTag };
//   },
// };
import { onMounted, ref, toRefs } from "vue";

export default {
  props: ["posts"],
  setup(props) {
    // Destructure and convert props to refs
    const { posts } = toRefs(props);
    onMounted(() => {
      try {
        console.log(posts.value + "this is data from posts.value");
        // Create a ref for tag data
        let tagData = ref([]);

        // Iterate over posts and extract tags
        posts.value.forEach((post) => {
          post.tag.forEach((tag) => {
            tagData.value.push(tag);
          });
        });

        // Filter unique tags
        let uniqueTag = tagData.value.filter((tag, index, array) => {
          return array.indexOf(tag) === index;
        });
        console.log(uniqueTag + "unique tag data");
        return { uniqueTag, tagData };
      } catch (err) {
        console.log(err.message);
      }
    });

    // return { tagData };
  },
};
</script>

<style></style>

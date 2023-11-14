<template>
  <div>
    <h1>Home</h1>
    name- {{ myName.name }}
    <button @click="changeName">change</button>
    <hr />
    your-name ={{ yourData.name }} and your-age = {{ yourData.age }}
    <button @click="changeData">changeYour</button>
    <hr />
    <h1>computed</h1>
    <input type="text" v-model="search" />
    search data- {{ search }}
    <p v-for="name in filterName" :key="name">{{ name }}</p>
    <router-view />
  </div>
</template>
<script>
import { ref, reactive, computed } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    let search = ref("");
    let myName = ref({ name: "mg mg", age: 20 });
    let yourData = reactive({ name: "aung aung", age: 23 });
    let changeName = () => {
      return (myName.value.name = "kyaw kyaw");
    };
    let changeData = () => {
      return (yourData.name = "phyo phyo "), (yourData.age = 20);
    };
    let nameArr = ref([
      "phoo thinzar",
      "maw maw nyein",
      "ye yint nyein han",
      "war war khine",
      "thet marlar win",
    ]);

    let filterName = computed(() => {
      return nameArr.value.filter((n) => {
        return n.includes(search.value);
      });
    });

    return {
      myName,
      changeName,
      yourData,
      changeData,
      nameArr,
      search,
      filterName,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

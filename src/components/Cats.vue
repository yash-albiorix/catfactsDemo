<template>
  <div>
    <h1 class="title">Some Facts About Cats</h1>
    <div v-for="(cat, index) in catsData" :key="index" class="card">
      {{ cat.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCatsStore } from "../stores/useCats";
import { storeToRefs } from "pinia";

const { data, fetchData } = useCatsStore();
const { data: catsData } = storeToRefs(useCatsStore());

onMounted(() => {
  console.log("catsData", catsData.value);
  fetchData();
});
</script>


<style scoped>
.title {
  text-align: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 80%;
  margin: 2rem;
  padding: 1rem;
}
</style>

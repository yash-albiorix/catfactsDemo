<template>
  <div>
    <h1 class="title">Some Facts About Cats</h1>
    <div
      v-for="(cat, index) in catsData"
      :key="index"
      class="card"
      :class="{ grey: cat.used, ['details-hovered']: currentHoveredCard === index }"
    >
      {{ cat.text }}
      <CatDetails
        :created-at="cat.createdAt"
        :verified="cat.status.verified"
        :index="index"
        @hovered="currentHoveredCard = $event"
        @mouseleave="currentHoveredCard = -1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useCatsStore } from "../stores/useCats";
import { storeToRefs } from "pinia";
import CatDetails from './CatDetails.vue';

const { fetchData } = useCatsStore();
const { data: catsData } = storeToRefs(useCatsStore());

const currentHoveredCard = ref(-1);

onMounted(() => {
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
  margin: 2rem auto;
  
  padding: 1rem;
}

.details-hovered {
  border: 1px solid black;
}

.grey{
  background-color: grey;
  color: white;
}
</style>

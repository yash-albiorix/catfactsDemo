
<template>
  <div class="flex">
    <button @click="navigateTo('Cats')">Cats</button>
  </div>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (value: string) => {
  router.push({name:value});
}

</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  padding: 50px 0;
}
button {
  padding: 15px 40px;
    background-color: black;
    border: none;
    border-radius: 5%;
    font-size: 22px;
    color: white;
    cursor: pointer;
}
</style>

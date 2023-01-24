
<template>
  <nav>
    <router-link :to="{ name: 'Cats' }">Cats</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>

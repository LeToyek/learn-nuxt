<template>
  <div>
    <h1>dynamic page </h1>
    <h4>Your id is {{ id }}</h4>
  </div>
</template>

<script setup lang="ts">
  const id : string|string[] = useRoute().params.id

</script>

<style scoped>

</style>
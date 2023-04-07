<template>
  <div>
    <h1>TODO</h1>
    <h3>Add Todo</h3>
    <input v-model="todo" type="text" />
    <br>
    <button @click="addTodo">Add Todo</button>
    <h2 v-for="item in items">
         {{ item }}
    </h2>
    <NuxtLink to="/product">
      to product page
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const items : Ref<string[]> = ref([])
  const todo : Ref = ref()
  const addTodo = () => {
    items.value.push(todo.value)
    console.log(items)
  }

</script>

<style scoped>

</style>
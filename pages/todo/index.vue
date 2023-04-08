<template>
  <div>
    <h1>TODO</h1>
    <h3>Add Todo</h3>
    <input v-model="todo" type="text" />
    <br>
    <button @click="addTodo(todo)">Add Todo</button>
    <h2 v-for="item in todoList">
         {{ item }}
    </h2>
    <NuxtLink to="/product">
      to product page
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
import useTodoStore from "~/store/todos";
  
  const todo = ref("")
  const todoStore = useTodoStore()
  const addTodo = (todo :string) => todoStore.addValueToTodo(todo)
  const todoList = storeToRefs(todoStore)
  


</script>

<style scoped>

</style>
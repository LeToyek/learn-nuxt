<template>
  <h1 v-if="!isDone">Loading</h1>
  <div v-else>

    <h1>List of Products</h1>
    <div class=" grid sm:grid-cols-1 md:grid-cols-3 gap-5 ">
      <div v-for="p in products" class="shrink shadow-md p-4 sm:max-w overflow-hidden ">
        <h4 class="font-bold truncate">
          {{ p.title }}
        </h4>
        <NuxtLink :to="`/product/${p.id}`">
          <button class="btn">
            <h5 class="font-semibold text-sm text-white">
              Detail
            </h5>
          </button>
        </NuxtLink>

      </div>

    </div>
    <h4>
      {{ data }}
    </h4>
    <NuxtLink to="/todo">
      Move to Todo
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const isDone: Ref<Boolean> = ref(false)
  console.log(isDone.value)
interface Product {
  id: string | number,
  title: string,
}

const { data } = await useFetch("/api/testt?name=toyeq", {
  method: "post",
  body: { age: 17 }
})

const { data: products } = await useFetch<Product[]>("/api/store")
isDone.value = true
console.log(isDone.value)



</script>


<style scoped>
.testInput {
  border-radius: 12px;
  padding: 8px;
}
</style>
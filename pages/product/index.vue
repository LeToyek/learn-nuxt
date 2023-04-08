<template>
  <div>
    <!-- <input class="testInput" type="text" v-model="textValue" @input="inputType">
    <h1>Change Realtime: {{ textValue }}</h1>
    <input class="testInput" type="text" v-model="textClickPointer">
    <h2>Change onClick: {{ textClick }}</h2>
    <button @click="inputClick">Update</button> -->

    <h1>List of Products</h1>
    <div class=" grid sm:grid-cols-1 md:grid-cols-3 gap-5 ">
      <div v-for="p in products" class="shrink shadow-md p-4 sm:max-w overflow-hidden ">
        <h4 class="font-bold truncate">
          {{ p.title }}
        </h4>
        <NuxtLink :to="`/product/${p.id}`" >
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
const textValue: Ref<string> = ref("init state")
const textClickPointer: Ref = ref()
const textClick: Ref<string> = ref("init Click")

function inputType(e: Event): void {
  textValue.value = (e.target as HTMLInputElement).value
}

function inputClick(): void {
  textClick.value = textClickPointer.value
}
interface Product {
  id: string | number,
  title: string,
}
const {data} = await useFetch("/api/testt?name=toyeq",{
  method: "post",
  body: {age: 17}
})
console.log(data)
const {data:products}  = await useFetch<Product[]>("/api/store")
</script>

<style scoped>
.testInput {
  border-radius: 12px;
  padding: 8px;
}
</style>
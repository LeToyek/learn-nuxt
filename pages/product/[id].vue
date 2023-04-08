<template>
  <div>
    <h1 class="font-bold">Dynamic Page </h1>
    <h4>Your id is {{ id }}</h4>
    <div class="sm:max-w rounded overflow-hidden shadow-md mt-6">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ product.title }}</div>
        <p class="text-gray-700 text-base">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const id: string | string[] = useRoute().params.id
interface Product {
  title: string,
  price: string,
  category: string,
  description: string,
}
const { data: product } = useFetch<Product>("https://fakestoreapi.com/products/" + id)
</script>

<style scoped></style>
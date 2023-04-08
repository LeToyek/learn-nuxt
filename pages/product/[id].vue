<template>
  <div>
    <h1 class="font-bold">Dynamic Page </h1>
    <h4>Your id is {{ id }}</h4>
    <ProductCard :product="product"/>
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
const { data: product } = await useFetch<Product>("https://fakestoreapi.com/products/" + id)
</script>

<style scoped></style>
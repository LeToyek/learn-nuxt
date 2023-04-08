<template>
  <div>
    <div class="sm:max-w min-[320]:flex-col rounded overflow-hidden shadow-md mt-6 px-6 py-4 flex bg-white sm:justify-center">

      <img :src="`${product.image}`" class="thumb w-200px h-200px" />
      <div class="ml-6">
        <div class="font-bold text-4xl mb-2 text-gray-600">{{ product.title }}</div>
        <p class="text-gray-700 text-base">
          {{ product.description }}
        </p>
        <h3 class="text-gray-700 text-3xl font-semibold">
          ${{ product.price }}
        </h3>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const { product } = defineProps(["product"])
</script>

<style scoped></style>
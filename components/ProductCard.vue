<template>
  <div>
    <div class="sm:max-w rounded overflow-hidden shadow-md bg-white sm:justify-center">
      <div class="mt-6 px-6 py-4 sm:flex ">
        <div class="md:w-[32rem]">
          <img :src="`${product.image}`" class="thumb w-max h-max" />
        </div>
        <div class="sm:ml-10"  >
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
  </div>
</template>

<script setup lang="ts">
const { product } = defineProps(["product"])
</script>

<style scoped></style>
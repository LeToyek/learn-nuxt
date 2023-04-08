<template >
  <div>
    <header class="shadow-sm bg-blue-700 ">
      <nav class="container p-4 mx-auto flex justify-between items-center">
        <div class="flex-shrink-0">
          <a href="/" class="font-bold text-white text-2xl">Learn Nuxt</a>
        </div>
        <div class="flex md:hidden">
          <button @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none">
            <svg class="h-6 w-6" :class="{ 'hidden': isOpen, 'block': !isOpen }" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="h-6 w-6" :class="{ 'block': isOpen, 'hidden': !isOpen }" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul class="hidden md:flex md:gap-4">
          <li>
            <NuxtLink class="text-white text-base" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-white text-base" to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-white text-base" to="/product">Product</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-white text-base" to="/todo">Todo</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-white text-base" to="/survey">Survey</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-white text-base" to="/survey/library">Library</NuxtLink>
          </li>
        </ul>
      </nav>
      <ul class="md:hidden" :class="{ 'block': isOpen, 'hidden': !isOpen }">
        <li>
          <NuxtLink class="text-white text-base" to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-white text-base" to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-white text-base" to="/product">Product</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-white text-base" to="/todo">Todo</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-white text-base" to="/survey">Survey</NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-white text-base" to="/survey/library">Library</NuxtLink>
        </li>
      </ul>
    </header>
    <div class="container mx-auto p-4">

      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen: Ref<Boolean> = ref(false);
</script>

<style scoped>
.router-link-active {
  font-weight: bold;
}
</style>
<template >
  <div>
    <header>
      <NuxtLink to="/">Learn Nuxt</NuxtLink>
      <br>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <br>
        <NuxtLink to="/about">About</NuxtLink>
        <br>
        <NuxtLink to="/product">Product</NuxtLink>
        <br>
        <NuxtLink to="/todo">Todo</NuxtLink>
        <br>
        <NuxtLink to="/survey">Survey</NuxtLink>
        <br>
        <NuxtLink to="/survey/library">Library</NuxtLink>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style scoped>
  .router-link-active{
    color: greenyellow;
  }
</style>
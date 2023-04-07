<template >
  <div>
    <header>
      <NuxtLink to="/">Learn Nuxt</NuxtLink>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/todo">Todo</NuxtLink>
        <NuxtLink to="/survey">Survey</NuxtLink>
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
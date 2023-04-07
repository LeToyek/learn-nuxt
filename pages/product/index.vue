<template>
  <div>
    <input class="testInput" type="text" v-model="textValue" @input="inputType">
    <h1>Change Realtime: {{ textValue }}</h1>
    <input class="testInput" type="text" v-model="textClickPointer">
    <h2>Change onClick: {{ textClick }}</h2>
    <button @click="inputClick">Update</button>
    <NuxtLink to="/todo" >
      Move to Todo
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const textValue : Ref<string> =  ref("init state")
  const textClickPointer : Ref = ref()
  const textClick : Ref<string> = ref("init Click")

  function inputType(e:Event) : void {
    textValue.value = (e.target as HTMLInputElement).value
  }

  function inputClick(): void{
    textClick.value = textClickPointer.value
  }
  
</script>

<style scoped>
  .testInput{
    border-radius: 12px;
    padding: 8px;
  }
</style>
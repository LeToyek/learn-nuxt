export default defineEventHandler(async (event)=>{
  const data = await $fetch("https://fakestoreapi.com/products")
  return {data}
})
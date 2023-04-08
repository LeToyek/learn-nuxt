export default defineEventHandler(async e =>{
  const query = getQuery(e)
  const {age} = await readBody(e)

  return `yow guys, I'm ${query.name}, ${age} years old `
})
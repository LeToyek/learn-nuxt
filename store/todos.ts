import { defineStore } from "pinia"

const useTodoStore = defineStore("todoStore",()=>{
  const todoList : Ref<String[]> = ref(["ngaji,sholat,dzikir"])

  const addValueToTodo = (todo : String) => {
    todoList.value.push(todo)
  }
  return {addValueToTodo,todoList}

})

export default useTodoStore
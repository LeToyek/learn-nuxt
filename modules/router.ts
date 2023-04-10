import Car from "car.vue";
import { createRouter, createWebHashHistory } from 'vue-router';



const routes = [
  {
    path: "/car", component: Car
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
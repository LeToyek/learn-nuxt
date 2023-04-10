import Vue from 'vue';
import VueRouter from 'vue-router';

import Car from "@/modules/car.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/car", component: Car
  }
]
console.log(Car)
console.log(VueRouter)


const router = new VueRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router
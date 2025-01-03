import Contador from "@/components/Contador.vue";
import ListaDeTareas from "@/components/ListaDeTareas.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/count",
      name: "contador",
      component: Contador,
    },
    {
      path: "/taskList",
      name: "lista de tareas",
      component: ListaDeTareas,
    },
  ],
});

export default router;

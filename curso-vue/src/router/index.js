import Contador from "@/modules/contador/components/Contador.vue";
import ListaDeTareas from "@/modules/listaDeTareas/components/ListaDeTareas.vue";
import RegistrarVue from "@/modules/registro/views/RegistrarVue.vue";
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
    {
      path: "/register",
      component: RegistrarVue,
    },
  ],
});

export default router;

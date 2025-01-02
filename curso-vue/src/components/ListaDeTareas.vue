<template>
  <div>
    <h2>Lista de Tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea" />
    <ul>
      <li v-for="(el, index) in tareas" :key="index">
        {{ el }}
        <button @click="deleteTask(index)">Eliminar tarea</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";

const tareas = ref([]);
const nuevaTarea = ref("");

const addTarea = () => {
  tareas.value.push(nuevaTarea.value); //agregamos las tareas al arr de tareas
  nuevaTarea.value = ""; //resetamos el valor del input
};

const deleteTask = (index) => {
  tareas.value.splice(index, 1);
};
</script>
<style scoped>
button {
  background-color: aqua;
  border: none;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 50ms;
}
button:hover {
  background-color: lightblue;
}
</style>

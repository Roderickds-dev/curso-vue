<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombreUsuario }}</h3>
    <h3>Email: {{ emailUsuario }}</h3>
    <RouterLink to="/count">Contador</RouterLink>
    <RouterLink to="/taskList">Lista de Tareas</RouterLink>
    <RouterLink to="/register">Resgistrarse</RouterLink>
  </div>
</template>
<script setup>
import { useRegistrarSotre } from "@/modules/registro/stores/registrarStore";
import { ref, watch } from "vue";

const registrarStore = useRegistrarSotre();

const nombreUsuario = ref(registrarStore.nombre);

const emailUsuario = ref(registrarStore.email);

watch(
  () => {
    registrarStore.nombre;
    registrarStore.email;
  },
  (newValue, newValue2) => {
    nombreUsuario.value = newValue;
    emailUsuario.value = newValue2;
  }
);
</script>
<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>

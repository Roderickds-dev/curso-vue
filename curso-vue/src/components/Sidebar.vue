<template>
  <div class="sidebar">
    <h2>Barra Lateral</h2>
    <RouterLink to="/count">Contador</RouterLink>
    <RouterLink to="/taskList">Lista de Tareas</RouterLink>
    <RouterLink to="/register">Resgistrarse</RouterLink>
  </div>
</template>
<script setup></script>
<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>

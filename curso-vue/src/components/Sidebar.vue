<template>
  <div class="sidebar">
    <h2>Barra Lateral</h2>
    <RouterLink to="/count">Count</RouterLink>
    <RouterLink to="/taskList">Task List</RouterLink>
  </div>
</template>
<script setup></script>
<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>

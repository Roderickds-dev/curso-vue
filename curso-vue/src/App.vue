<template>
  <!-- <Contador />
  <ListaDeTareas /> -->
  <div class="main">
    <MainView />
  </div>
</template>

<script setup>
import MainView from "./views/MainView.vue";
import Contador from "./components/Contador.vue";
import ListaDeTareas from "./components/ListaDeTareas.vue";
</script>

<style scoped>
.main {
  display: flex;
}
</style>

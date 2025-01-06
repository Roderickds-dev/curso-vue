<template>
  <!-- <Contador />
  <ListaDeTareas /> -->
  <div class="main">
    <Header />
    <MainView />
  </div>
</template>

<script setup>
import MainView from "./views/MainView.vue";
import Header from "./components/Header.vue";
// import Contador from "./modules/contador/components/Contador.vue";
// import ListaDeTareas from "./modules/listaDeTareas/components/ListaDeTareas.vue";
</script>

<style scoped>
.main {
  display: flex;
}
</style>

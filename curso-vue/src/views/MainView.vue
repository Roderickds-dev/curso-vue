<template>
  <Sidebar />
  <div class="container">
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<style scoped>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>

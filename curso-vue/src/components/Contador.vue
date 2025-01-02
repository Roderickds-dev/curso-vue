<template>
  <h1>Hi! World</h1>
  <p>
    {{ contador }}
  </p>
  <button @click="handleClick('sumar')">Incrementar</button>

  <button @click="handleClick('restar')">Decrementar</button>
</template>

<script setup>
import { ref } from "vue";

const contador = ref(0);

const handleClick = (action) => {
  if (action === "sumar") {
    contador.value = contador.value + 1;
  }
  if (action === "restar") {
    contador.value = contador.value - 1;
  }
};
</script>

<style scoped>
button {
  background-color: aqua;
  border: none;
  padding: 15px;
  margin: 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 50ms;
}
button:hover {
  background-color: lightblue;
}
</style>

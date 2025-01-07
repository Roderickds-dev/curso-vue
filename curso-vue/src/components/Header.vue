<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="temp">
    <p v-if="datos">
      La temperatura actual es de:
      {{ datos.current.temperature_2m }}
      º
    </p>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const datos = ref(null);

const fetchTemp = async () => {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m&timezone=auto"
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText} `);
    }
    const json = await res.json();
    datos.value = json;
    //console.log(json.current.temperature_2m);
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => fetchTemp());
</script>
<style scoped>
.temp {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background-color: #005;
  color: white;
}
</style>

<template>
  <div>
    <h1>Formulario de Registro</h1>
    <Form :validation-schema="schema" @submit="onSubmit" class="form">
      <label for="nombre">Nombre: </label>
      <Field
        v-model="nombre"
        type="text"
        id="nombre"
        name="nombre"
        placeholder="Ingrese su Nombre"
      />
      <ErrorMessage name="nombre"></ErrorMessage>
      <label for="correo">Correo:</label>
      <Field
        v-model="email"
        type="email"
        id="email"
        name="email"
        placeholder="Ingrese su correo electrónico"
      />
      <ErrorMessage name="email"></ErrorMessage>
      <button type="submit">Resgistrar</button>
    </Form>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { schema } from "../schemas/validationSchema";
import { useRegistrarSotre } from "../stores/registrarStore";
import { ref } from "vue";

const nombre = ref("");
const email = ref("");

const registrarStore = useRegistrarSotre();

const onSubmit = () => {
  registrarStore.guardarRegistro(nombre.value, email.value);
  console.log("Se ha enviado el formulario");
};
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>

<template>
  <div>
    <h1>Formulario de Registro</h1>
    <Form :validation-schema="schema" @submit="onSubmit" class="form">
      <label for="nombre">Nombre: </label>
      <Field
        type="text"
        id="nombre"
        name="nombre"
        placeholder="Ingrese su Nombre"
      />
      <ErrorMessage name="nombre"></ErrorMessage>
      <label for="correo">Correo:</label>
      <Field
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

const onSubmit = () => {
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

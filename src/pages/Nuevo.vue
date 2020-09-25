<template>
  <div class="q-pa-md" style="max-width: 100%">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        outlined
        filled
        v-model="nombre"
        label="Nombre*"
        hint="Digita tu nombre"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Ingresa tu nombre']"
      ></q-input>

      <q-input
        filled
        type="number"
        v-model="edad"
        label="Edad*"
        hint="Digita tu edad"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa tu edad',
          val => val > 0 && val < 100 || 'ingresa un numero valido'
        ]"
      />

      <q-input
        v-model="descripcion"
        filled
        label="Direccion*"
        hint="Digita tu direccion"
        type="textarea"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Ingresa una direccion',
        ]"
      />

      <div>
        <q-btn label="Registrar" type="submit" color="primary" />
        <q-btn label="Cancelar" type="reset" color="negative" flat class="q-ml-sm" to="/listado2" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: null,
      edad: null,
      descripcion: null,
    };
  },

  methods: {
    onSubmit() {
      // if (this.accept !== true) {
      //   this.$q.notify({
      //     color: "red-5",
      //     textColor: "white",
      //     icon: "warning",
      //     message: "You need to accept the license and terms first",
      //   });
      // } else {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "add",
        message: "Registro guardado",
      });
      // }
    },

    onReset() {
      this.nombre = null;
      this.edad = null;
      this.direccion = false;
    },
  },
};
</script>

<style>
</style>
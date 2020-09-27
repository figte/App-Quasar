
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="open"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class>
        <q-bar>
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimizar</q-tooltip>
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximizar</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup @click="open=false">
            <q-tooltip content-class="bg-white text-primary">Cerrar</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Registro Nuevo</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
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
                <q-btn
                  label="Cancelar"
                  type="reset"
                  color="negative"
                  flat
                  class="q-ml-sm"
                  to="/listado2"
                />
              </div>
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>


<script>
export default {
  computed: {
    open: {
      get() {
        return this.$store.getters["persona/getOpen"];
      },
      set(value) {
        this.$store.dispatch("persona/setOpen", value);
      },
    },
  },
  data() {
    return {
      maximizedToggle: true,
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
<template>
  <div class="q-pa-md">
    <q-table
      grid
      card-class="bg-primary text-white"
      title="Datos"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :pagination="initialPagination"
      no-data-label="No hay datos"
      no-results-label="No se encontraron datos"
      rows-per-page-label="Mostrar"
    >
      <template v-slot:item="props" class="row">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-card flat bordered class="text-center">
            <q-img
              src="../assets/user.svg"
              class="image"
              style="display:block; margin:auto; width:120px; margin-top:2%"
            />

            <q-card-section>
              <!-- <div class="text-overline text-orange-9">Overline</div> -->
              <p class="text-caption text-grey">ID: {{props.row.id}}</p>
              <p class="text-caption text-grey">NOMBRE: {{props.row.nombre}}</p>
              <p class="text-caption text-grey">EDAD: {{props.row.edad}}</p>
              <p class="text-caption text-grey">Direccion: {{props.row.direccion}}</p>
            </q-card-section>

            <q-card-actions>
              <div style=" display:inline; margin:auto; ">
                <q-btn class="q-ml-sm" color="negative" label="Eliminar" @click="removeRow" />
                <q-btn class="q-ml-sm" color="warning" label="Modificar" @click="editRow" />
              </div>
            </q-card-actions>
          </q-card>
        </div>
      </template>

      <template v-slot:top>
        <q-btn class="q-ml-sm" color="primary" label="Nuevo" @click="open=true" />

        <q-space />
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <!-- <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />-->
      </template>
    </q-table>
    <DialogForm></DialogForm>
  </div>
</template>

<script>
import DialogForm from "components/DialogFormPersona.vue";
export default {
  components: { DialogForm },
  computed: {
    data: {
      get() {
        return this.$store.getters["persona/getData"];
      },
    },
    columns: {
      get() {
        return this.$store.getters["persona/getColumns"];
      },
    },
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
      expanded: false,
      select: true,
      selected: [],
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,

        // rowsNumber: xx if getting data from a server
      },
      filter: "",
    };
  },
  methods: {
    rowSelect() {
      this.select = !this.select;
    },
    // emulate fetching data from server
    addRow() {
      this.loading = true;
      setTimeout(() => {
        const index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)];
        if (this.data.length === 0) {
          this.rowCount = 0;
        }
        row.id = ++this.rowCount;
        const addRow = { ...row }; // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [
          ...this.data.slice(0, index),
          addRow,
          ...this.data.slice(index),
        ];
        this.loading = false;
      }, 500);
    },

    removeRow() {
      this.loading = true;
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length);
        this.data = [
          ...this.data.slice(0, index),
          ...this.data.slice(index + 1),
        ];
        this.loading = false;
      }, 500);
    },

    editRow() {
      setTimeout(() => {
        alert("registro modificado!");
      }, 500);
    },
  },
};
</script>

<style>
</style>
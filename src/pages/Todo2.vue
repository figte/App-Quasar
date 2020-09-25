<template>
  <div class="q-pa-md">
    <q-table
      title="Datos"
      :data="data"
      :columns="columns"
      row-key="id"
      selection="single"
      :selected.sync="selected"
      :filter="filter"
      :pagination="initialPagination"
      no-data-label="No hay datos"
      no-results-label="No se encontraron datos"
      rows-per-page-label="Mostrar"
      @selection="rowSelect"
    >
      <template v-slot:top="props">
        <q-btn class="q-ml-sm" color="primary" label="Nuevo" to="/nuevo" />
        <q-btn
          class="q-ml-sm"
          color="negative"
          :disable="select"
          label="Eliminar"
          @click="removeRow"
        />
        <q-btn
          class="q-ml-sm"
          color="warning"
          :disable="select"
          label="Modificar"
          @click="editRow"
        />
        <q-space />
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>
    </q-table>

    <div class="q-mt-md">Seleccionada: {{ JSON.stringify(selected) }}</div>
    <div class="q-mt-md">Seleccionada: {{ select }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: true,
      selected: [],
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 6,

        // rowsNumber: xx if getting data from a server
      },
      filter: "",
      columns: [
        {
          name: "ID",
          required: true,
          label: "ID",
          align: "left",
          field: "id",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "Nombre",
          align: "center",
          label: "Nombre",
          field: "nombre",
          sortable: true,
        },
        { name: "edad", label: "Edad", field: "edad", sortable: true },
        { name: "direccion", label: "direccion", field: "direccion" },
      ],
      data: [
        {
          id: 1,
          nombre: "Juan Perez",
          edad: 20,
          direccion: "Ahuachapan",
        },
        {
          id: 2,
          nombre: "Matias Yogurt",
          edad: 20,
          direccion: "Sonsonate",
        },
        {
          id: 3,
          nombre: "Jose Perez",
          edad: 20,
          direccion: "San Salvador",
        },
        {
          id: 4,
          nombre: "Frozen Yogurt",
          edad: 20,
          direccion: "Ahuachapan",
        },
        {
          id: 5,
          nombre: "Frozen Yogurt",
          edad: 20,
          direccion: "Sonsonate",
        },
        {
          id: 6,
          nombre: "Fernando Martinez",
          edad: 20,
          direccion: "Ahuachapan",
        },
        {
          id: 7,
          nombre: "Maria Yogurt",
          edad: 20,
          direccion: "Ahuachapan",
        },
        {
          id: 8,
          nombre: "Julia Lopez",
          edad: 20,
          direccion: "San Salvador",
        },
        {
          id: 9,
          nombre: "Marco Polo",
          edad: 20,
          direccion: "Sonsonate",
        },
        {
          id: 10,
          nombre: "Luisa Martinez",
          edad: 20,
          direccion: "San Salvador",
        },
      ],
    };
  },
  methods: {
    // emulate fetching data from server
    rowSelect() {
      this.select = !this.select;
    },
    addRow() {
      setTimeout(() => {
        alert("registro guardado");
      }, 500);
    },

    removeRow() {
      setTimeout(() => {
        alert("registro eliminado!");
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
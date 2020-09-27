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
  },
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
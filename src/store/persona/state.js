export default function () {
  return {
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
    open: false,
  };
}

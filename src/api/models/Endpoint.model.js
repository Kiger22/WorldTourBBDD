const mongoose = require('mongoose');

const endpointSchema = new mongoose.Schema(
  {
    // creamos el esquema de datos en formato JSON ej.
    // nombre: { type: String, required: true },
    // url: { type: String, required: true },
    // description: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "nombre de la colección", // informativo
  }
);

//                                info         schema     nombre colección
const Endpoint = mongoose.model("endpoints", endpointSchema, "endpoints");
module.exports = Endpoint;
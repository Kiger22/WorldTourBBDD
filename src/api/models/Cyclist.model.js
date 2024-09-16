const mongoose = require('mongoose');

const cyclistSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    nacionalidad: { type: String, required: true },
    equipo: { type: mongoose.Types.ObjectId, ref: "teams", required: false },
    especialidad: { type: String, required: true },
    puestoRankingUCI: { type: Number, required: true },
    victoriasGrandesVueltas: {
      tourDeFrancia: { type: Number, default: 0 },
      vueltaEspaña: { type: Number, default: 0 },
      giroDeItalia: { type: Number, default: 0 }
    },
    victoriasMonumentos: { type: Number, default: 0 },
    otrasVictorias: {
      otrosTours: { type: Number, default: 0 }
    },
    imagen: { type: String }  // URL de la imagen
  },
  {
    timestamps: true,
    collection: "cyclists"
  }
);

const Cyclist = mongoose.model("cyclists", cyclistSchema, "cyclists");
module.exports = Cyclist;
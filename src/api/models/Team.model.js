const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    país: { type: String, required: true },
    patrocinador: { type: String, required: true },
    rankingUCI: { type: Number, required: true },
    victoriasGrandesVueltas: {
      tourDeFrancia: { type: Number, default: 0 },
      vueltaEspaña: { type: Number, default: 0 },
      giroDeItalia: { type: Number, default: 0 }
    },
    victoriasMonumentos: { type: Number, default: 0 },
    otrasVictorias: { type: Number, default: 0 },
    imagen: { type: String }  // URL de la imagen
  },
  {
    timestamps: true,
    collection: "teams"
  }
);

const Team = mongoose.model("teams", teamSchema, "teams");
module.exports = Team;
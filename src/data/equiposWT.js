const equiposWT = [
  {
    nombre: "Jumbo-Visma",
    país: "Países Bajos",
    patrocinador: "Jumbo",
    rankingUCI: 1,
    victoriasGrandesVueltas: {
      tourDeFrancia: 2,
      vueltaEspaña: 2,
      giroDeItalia: 1
    },
    victoriasMonumentos: 3,
    otrasVictorias: 20,
    imagen: "https://example.com/jumbo-visma.jpg"
  },
  {
    nombre: "UAE Team Emirates",
    país: "Emiratos Árabes Unidos",
    patrocinador: "Emirates",
    rankingUCI: 2,
    victoriasGrandesVueltas: {
      tourDeFrancia: 2,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 4,
    otrasVictorias: 18,
    imagen: "https://example.com/uae-team-emirates.jpg"
  },
  {
    nombre: "Soudal Quick-Step",
    país: "Bélgica",
    patrocinador: "Soudal",
    rankingUCI: 3,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 1,
      giroDeItalia: 0
    },
    victoriasMonumentos: 5,
    otrasVictorias: 15,
    imagen: "https://example.com/soudal-quick-step.jpg"
  },
  {
    nombre: "Ineos Grenadiers",
    país: "Reino Unido",
    patrocinador: "Ineos",
    rankingUCI: 4,
    victoriasGrandesVueltas: {
      tourDeFrancia: 7,
      vueltaEspaña: 1,
      giroDeItalia: 3
    },
    victoriasMonumentos: 2,
    otrasVictorias: 22,
    imagen: "https://example.com/ineos-grenadiers.jpg"
  },
  {
    nombre: "Bahrain Victorious",
    país: "Baréin",
    patrocinador: "Victorious",
    rankingUCI: 5,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 1,
    otrasVictorias: 10,
    imagen: "https://example.com/bahrain-victorious.jpg"
  },
  {
    nombre: "Alpecin-Deceuninck",
    país: "Bélgica",
    patrocinador: "Deceuninck",
    rankingUCI: 6,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 2,
    otrasVictorias: 12,
    imagen: "https://example.com/alpecin-deceuninck.jpg"
  },
  {
    nombre: "Groupama-FDJ",
    país: "Francia",
    patrocinador: "Groupama",
    rankingUCI: 7,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 1,
    otrasVictorias: 7,
    imagen: "https://example.com/groupama-fdj.jpg"
  },
  {
    nombre: "Movistar Team",
    país: "España",
    patrocinador: "Movistar",
    rankingUCI: 8,
    victoriasGrandesVueltas: {
      tourDeFrancia: 2,
      vueltaEspaña: 5,
      giroDeItalia: 4
    },
    victoriasMonumentos: 1,
    otrasVictorias: 10,
    imagen: "https://example.com/movistar-team.jpg"
  },
  {
    nombre: "EF Education-EasyPost",
    país: "Estados Unidos",
    patrocinador: "Education First",
    rankingUCI: 9,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: 8,
    imagen: "https://example.com/ef-education-easypost.jpg"
  },
  {
    nombre: "Bora-Hansgrohe",
    país: "Alemania",
    patrocinador: "Hansgrohe",
    rankingUCI: 10,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 1
    },
    victoriasMonumentos: 0,
    otrasVictorias: 9,
    imagen: "https://example.com/bora-hansgrohe.jpg"
  },
  {
    nombre: "Team Jayco AlUla",
    país: "Australia",
    patrocinador: "AlUla",
    rankingUCI: 11,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 1,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: 8,
    imagen: "https://example.com/team-jayco-alula.jpg"
  },
  {
    nombre: "Lotto Dstny",
    país: "Bélgica",
    patrocinador: "Dstny",
    rankingUCI: 12,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 1,
    otrasVictorias: 5,
    imagen: "https://example.com/lotto-dstny.jpg"
  },
  {
    nombre: "Astana Qazaqstan Team",
    país: "Kazajistán",
    patrocinador: "Qazaqstan",
    rankingUCI: 13,
    victoriasGrandesVueltas: {
      tourDeFrancia: 2,
      vueltaEspaña: 1,
      giroDeItalia: 2
    },
    victoriasMonumentos: 0,
    otrasVictorias: 9,
    imagen: "https://example.com/astana-qazaqstan.jpg"
  },
  {
    nombre: "AG2R Citroën Team",
    país: "Francia",
    patrocinador: "Citroën",
    rankingUCI: 14,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: 6,
    imagen: "https://example.com/ag2r-citroen.jpg"
  },
  {
    nombre: "Israel-Premier Tech",
    país: "Israel",
    patrocinador: "Premier Tech",
    rankingUCI: 15,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: 4,
    imagen: "https://example.com/israel-premier-tech.jpg"
  },
  {
    nombre: "Intermarché-Circus-Wanty",
    país: "Bélgica",
    patrocinador: "Circus",
    rankingUCI: 16,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: 6,
    imagen: "https://example.com/intermarche-circus-wanty.jpg"
  },
  {
    nombre: "Trek-Segafredo",
    país: "Estados Unidos",
    patrocinador: "Segafredo",
    rankingUCI: 17,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 2,
    otrasVictorias: 7,
    imagen: "https://example.com/trek-segafredo.jpg"
  },
  {
    nombre: "Cofidis",
    país: "Francia",
    patrocinador: "Cofidis",
    rankingUCI: 18,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: 4,
    imagen: "https://example.com/cofidis.jpg"
  },
  {
    nombre: "DSM-Firmenich",
    país: "Alemania",
    patrocinador: "Firmenich",
    rankingUCI: 19,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: 4,
    imagen: "https://example.com/dsm-firmenich.jpg"
  },
  {
    nombre: "Team Arkea-Samsic",
    país: "Francia",
    patrocinador: "Samsic",
    rankingUCI: 20,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: 3,
    imagen: "https://example.com/arkea-samsic.jpg"
  }
];

module.exports = equiposWT;
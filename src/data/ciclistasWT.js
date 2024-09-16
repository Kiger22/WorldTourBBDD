const ciclistasWT = [
  {
    nombre: "Tadej Pogačar",
    nacionalidad: "Eslovenia",
    especialidad: "Escalador/Contrarrelojista",
    puestoRankingUCI: 1,
    victoriasGrandesVueltas: {
      tourDeFrancia: 2,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 3,
    otrasVictorias: {
      otrosTours: 5
    },
    imagen: "https://example.com/tadej-pogacar.jpg"
  },
  {
    nombre: "Primož Roglič",
    nacionalidad: "Eslovenia",
    especialidad: "Escalador/Contrarrelojista",
    puestoRankingUCI: 3,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 3,
      giroDeItalia: 1
    },
    victoriasMonumentos: 1,
    otrasVictorias: {
      otrosTours: 7
    },
    imagen: "https://example.com/primoz-roglic.jpg"
  },
  {
    nombre: "Remco Evenepoel",
    nacionalidad: "Bélgica",
    especialidad: "Contrarrelojista",
    puestoRankingUCI: 2,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 1,
      giroDeItalia: 0
    },
    victoriasMonumentos: 2,
    otrasVictorias: {
      otrosTours: 4
    },
    imagen: "https://example.com/remco-evenepoel.jpg"
  },
  {
    nombre: "Jonas Vingegaard",
    nacionalidad: "Dinamarca",
    especialidad: "Escalador",
    puestoRankingUCI: 4,
    victoriasGrandesVueltas: {
      tourDeFrancia: 2,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: {
      otrosTours: 3
    },
    imagen: "https://example.com/jonas-vingegaard.jpg"
  },
  {
    nombre: "Wout van Aert",
    nacionalidad: "Bélgica",
    especialidad: "Clásicas/Sprint",
    puestoRankingUCI: 5,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 1,
    otrasVictorias: {
      otrosTours: 2
    },
    imagen: "https://example.com/wout-van-aert.jpg"
  },
  {
    nombre: "Julian Alaphilippe",
    nacionalidad: "Francia",
    especialidad: "Clásicas",
    puestoRankingUCI: 10,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 2,
    otrasVictorias: {
      otrosTours: 1
    },
    imagen: "https://example.com/julian-alaphilippe.jpg"
  },
  {
    nombre: "Egan Bernal",
    nacionalidad: "Colombia",
    especialidad: "Escalador",
    puestoRankingUCI: 12,
    victoriasGrandesVueltas: {
      tourDeFrancia: 1,
      vueltaEspaña: 0,
      giroDeItalia: 1
    },
    victoriasMonumentos: 0,
    otrasVictorias: {
      otrosTours: 2
    },
    imagen: "https://example.com/egan-bernal.jpg"
  },
  {
    nombre: "Richard Carapaz",
    nacionalidad: "Ecuador",
    especialidad: "Escalador",
    puestoRankingUCI: 14,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 1
    },
    victoriasMonumentos: 0,
    otrasVictorias: {
      otrosTours: 3
    },
    imagen: "https://example.com/richard-carapaz.jpg"
  },
  {
    nombre: "Mathieu van der Poel",
    nacionalidad: "Países Bajos",
    especialidad: "Clásicas/Sprint",
    puestoRankingUCI: 8,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 4,
    otrasVictorias: {
      otrosTours: 1
    },
    imagen: "https://example.com/mathieu-van-der-poel.jpg"
  },
  {
    nombre: "Filippo Ganna",
    nacionalidad: "Italia",
    especialidad: "Contrarrelojista",
    puestoRankingUCI: 15,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: {
      otrosTours: 3
    },
    imagen: "https://example.com/filippo-ganna.jpg"
  },
  {
    nombre: "Mikel Landa",
    nacionalidad: "España",
    especialidad: "Escalador",
    puestoRankingUCI: 11,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: {
      otrosTours: 4
    },
    imagen: "https://example.com/mikel-landa.jpg"
  },
  {
    nombre: "Simon Yates",
    nacionalidad: "Reino Unido",
    especialidad: "Escalador",
    puestoRankingUCI: 9,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 1,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: {
      otrosTours: 5
    },
    imagen: "https://example.com/simon-yates.jpg"
  },
  {
    nombre: "Geraint Thomas",
    nacionalidad: "Reino Unido",
    especialidad: "Contrarrelojista",
    puestoRankingUCI: 6,
    victoriasGrandesVueltas: {
      tourDeFrancia: 1,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: {
      otrosTours: 2
    },
    imagen: "https://example.com/geraint-thomas.jpg"
  },
  {
    nombre: "David Gaudu",
    nacionalidad: "Francia",
    especialidad: "Escalador",
    puestoRankingUCI: 7,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: {
      otrosTours: 2
    },
    imagen: "https://example.com/david-gaudu.jpg"
  },
  {
    nombre: "Tom Pidcock",
    nacionalidad: "Reino Unido",
    especialidad: "Clásicas/Ciclocross",
    puestoRankingUCI: 13,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: {
      otrosTours: 1
    },
    imagen: "https://example.com/tom-pidcock.jpg"
  },
  {
    nombre: "Jai Hindley",
    nacionalidad: "Australia",
    especialidad: "Escalador",
    puestoRankingUCI: 16,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 1
    },
    victoriasMonumentos: 0,
    otrasVictorias: {
      otrosTours: 3
    },
    imagen: "https://example.com/jai-hindley.jpg"
  },
  {
    nombre: "Alejandro Valverde",
    nacionalidad: "España",
    especialidad: "Escalador/Clásicas",
    puestoRankingUCI: 0,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 1,
      giroDeItalia: 0
    },
    victoriasMonumentos: 4,
    otrasVictorias: {
      otrosTours: 12
    },
    imagen: "https://example.com/alejandro-valverde.jpg"
  },
  {
    nombre: "Vincenzo Nibali",
    nacionalidad: "Italia",
    especialidad: "Escalador",
    puestoRankingUCI: 0,
    victoriasGrandesVueltas: {
      tourDeFrancia: 1,
      vueltaEspaña: 1,
      giroDeItalia: 2
    },
    victoriasMonumentos: 3,
    otrasVictorias: {
      otrosTours: 6
    },
    imagen: "https://example.com/vincenzo-nibali.jpg"
  },
  {
    nombre: "Thibaut Pinot",
    nacionalidad: "Francia",
    especialidad: "Escalador",
    puestoRankingUCI: 17,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 1,
    otrasVictorias: {
      otrosTours: 4
    },
    imagen: "https://example.com/thibaut-pinot.jpg"
  },
  {
    nombre: "Fernando Gaviria",
    nacionalidad: "Colombia",
    especialidad: "Sprint",
    puestoRankingUCI: 20,
    victoriasGrandesVueltas: {
      tourDeFrancia: 0,
      vueltaEspaña: 0,
      giroDeItalia: 0
    },
    victoriasMonumentos: 0,
    otrasVictorias: {
      otrosTours: 2
    },
    imagen: "https://example.com/fernando-gaviria.jpg"
  }
];


module.exports = ciclistasWT; 

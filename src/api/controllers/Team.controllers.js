const Team = require("../models/Team.model");

// GET 
const getTeam = async (req, res, next) => {
  try {
    const teams = await Team.find().populate("ciclistas");
    return res.status(200).json(teams);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido al obtener los Teams");
  }
};

// GET by ID 
const getTeamById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id).populate("ciclistas");
    return res.status(200).json(team);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener el team con id: " + id);
  }
}

// GET by Name
const getTeamByName = async (req, res, next) => {
  try {
    const { nombre } = req.params;
    const team = await Team.findOne({ nombre }).populate("ciclistas");
    return res.status(200).json(team);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener el team con nombre: " + nombre);
  }
}

// GET by Location
const getTeamByLocation = async (req, res, next) => {
  try {
    const { país } = req.params;
    const teams = await Team.find({ país }).populate("ciclistas");
    return res.status(200).json(teams);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener los teams en la ubicación: " + pais);
  }
}

// GET by Ranking
const getTeamByRanking = async (req, res, next) => {
  try {
    const { rankingUCI } = req.params;
    const teams = await Team.find({ rankingUCI }).populate("ciclistas");
    return res.status(200).json(teams);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener los teams con ranking: " + rankingUCI);
  }
}

// POST  
const postTeam = async (req, res, next) => {
  try {
    const newTeam = new Team(req.body);
    const teamSaved = await newTeam.save();
    return res.status(201).json(teamSaved);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al crear un nuevo team");
  }
}

// PUT by ID
const putTeam = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Obtener equipo viejo
    const oldTeam = await Team.findById(id);
    if (!oldTeam) {
      return res.status(404).json("Equipo no encontrado");
    }

    const newTeam = new Team(req.body);
    newTeam._id = id;

    // Combinar ciclistas del equipo viejo y nuevo
    const combinedCiclistas = [
      ...(oldTeam.ciclistas || []),
      ...(newTeam.ciclistas || [])
    ];

    // Usar Map para evitar duplicados
    const cyclistMap = new Map();

    combinedCiclistas.forEach(cyclist => {
      // Asegurarse de que el ID esté presente y sea de tipo string
      if (cyclist.id) {
        const cyclistId = String(cyclist.id);  // Convertir el ID a string para evitar problemas con tipos de datos
        console.log("Añadiendo ciclista con ID:", cyclistId);  // Depuración
        cyclistMap.set(cyclistId, cyclist);  // Sobrescribe duplicados
      } else {
        console.log("Ciclista sin ID encontrado:", cyclist);  // Depuración
      }
    });

    // Convertir el Map a un array de ciclistas únicos
    newTeam.ciclistas = Array.from(cyclistMap.values());

    console.log("Unique Ciclistas:", newTeam.ciclistas);  // Verificar los ciclistas únicos

    // Actualizar equipo
    const updatedTeam = await Team.findByIdAndUpdate(id, newTeam, { new: true });
    if (!updatedTeam) {
      return res.status(404).json("Equipo no encontrado o no se pudo actualizar");
    }

    return res.status(200).json(updatedTeam);
  } catch (error) {
    console.error("Error:", error);  // Depuración del error
    return res.status(400).json("Algo ha ocurrido un error al actualizar el equipo con id: " + id);
  }
};



// DELETE by ID
const deleteTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTeam = await Team.findByIdAndDelete(id);
    return res.status(200).json(deletedTeam);
  } catch (error) {
    return res.status(400).json("Error al eliminar el team con id: " + id);
  }
}

module.exports = {
  getTeam,
  getTeamById,
  getTeamByName,
  getTeamByLocation,
  getTeamByRanking,
  postTeam,
  putTeam,
  deleteTeam
};
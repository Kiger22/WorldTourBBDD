const Team = require("../models/Team.model");

// GET 
const getTeam = async (req, res, next) => {
  try {
    const teams = await Team.find();
    return res.status(200).json(teams);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido al obtener los Teams");
  }
};

// GET by ID 
const getTeamById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);
    return res.status(200).json(team);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener el team con id: " + id);
  }
}

// GET by Name
const getTeamByName = async (req, res, next) => {
  try {
    const { nombre } = req.params;
    const team = await Team.findOne({ nombre });
    return res.status(200).json(team);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener el team con nombre: " + nombre);
  }
}

// GET by Location
const getTeamByLocation = async (req, res, next) => {
  try {
    const { país } = req.params;
    const teams = await Team.find({ país });
    return res.status(200).json(teams);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener los teams en la ubicación: " + pais);
  }
}

// GET by Ranking
const getTeamByRanking = async (req, res, next) => {
  try {
    const { rankingUCI } = req.params;
    const teams = await Team.find({ rankingUCI });
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
    const oldTeam = await Team.findById(id);
    const newTeam = new Team(req.body);
    newTeam._id = id;
    newTeam.ciclistas = [...oldTeam.ciclistas, ...req.body.ciclistas];
    const updatedTeam = await Team.findByIdAndUpdate(id, newTeam, { new: true });
    return res.status(200).json(updatedTeam);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al actualizar el team con id: " + id);
  }
}

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
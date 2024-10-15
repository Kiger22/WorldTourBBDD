const Cyclist = require("../models/Cyclist.model");

// GET 
const getCyclist = async (req, res, next) => {
  try {
    const cyclist = await Cyclist.find().populate("equipo");
    return res.status(200).json(cyclist);
  }
  catch (error) {
    return res.status(400).json("Algo ha ocurrido al obtener los ciclistas");
  }
};

// GET by ID 
const getCyclistById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cyclist = await Cyclist.findById(id).populate("equipo");
    return res.status(200).json(cyclist);
  }
  catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener el ciclista con id: " + id);
  }
}

// GET by Name
const getCyclistByName = async (req, res, next) => {
  try {
    const { nombre } = req.params;
    const cyclist = await Cyclist.findOne({ nombre }).populate("equipo");
    return res.status(200).json(cyclist);
  }
  catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener el ciclista con nombre: " + nombre);
  }
}

// GET by Location
const getCyclistByLocation = async (req, res, next) => {
  try {
    const { pais } = req.params;
    const cyclist = await Cyclist.findOne({ pais }).populate("equipo");
    return res.status(200).json(cyclist);
  }
  catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener los ciclista en la ubicación: " + pais);
  }
}

// GET by Ranking
const getCyclistByRanking = async (req, res, next) => {
  try {
    const { puestoRankingUCI } = req.params;
    const cyclist = await Cyclist.find({ puestoRankingUCI }).populate("equipo");
    return res.status(200).json(cyclist);
  }
  catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener el ciclista con ranking: " + rankingUCI);
  }
}

// POST  
const postCyclist = async (req, res, next) => {
  try {
    const newCyclist = new Cyclist(req.body);
    const cyclistSaved = await newCyclist.save();
    return res.status(201).json(cyclistSaved);
  }
  catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al crear un nuevo ciclista");
  }
}

// PUT by ID
const putCyclist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCyclist = new Cyclist(req.body);
    newCyclist._id = id;
    const updatedCyclist = await Cyclist.findByIdAndUpdate(id, newCyclist, { new: true });
    return res.status(200).json(updatedCyclist);
  }
  catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al actualizar el ciclista con id: " + id);
  }
}

// DELETE by ID
const deleteCyclist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCyclist = await Cyclist.findByIdAndDelete(id);
    return res.status(200).json(deletedCyclist);
  }
  catch (error) {
    return res.status(400).json("Error al eliminar el ciclista con id: " + id);
  }
}

module.exports = {
  getCyclist,
  getCyclistById,
  getCyclistByName,
  getCyclistByLocation,
  getCyclistByRanking,
  postCyclist,
  putCyclist,
  deleteCyclist
};
const Endpoint = require("../models/Endpoint.model");

//?     CRUD -> create read update delete
//               POST   GET   PUT  DELETE

// GET 
const getEndpoint = async (req, res, next) => {
  try {
    const endpoints = await Endpoint.find();
    return res.status(200).json(endpoints);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener los endpoints");
  }
};

// POST  
const postEndpoint = async (req, res, next) => {
  try {
    const newEndpoint = new Endpoint(req.body);
    const endpointSaved = await newEndpoint.save();
    return res.status(201).json(endpointSaved);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al crear un nuevo endpoint");
  }
}

// GET by ID 
const getEndpointById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const endpoint = await Endpoint.findById(id);
    return res.status(200).json(endpoint);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al obtener el endpoint con id: " + id);
  }
}

// PUT by ID
const putEndpoint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedEndpoint = await Endpoint.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updatedEndpoint);
  } catch (error) {
    return res.status(400).json("Algo ha ocurrido un error al actualizar el endpoint con id: " + id);
  }
}

// DELETE by ID
const deleteEndpoint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedEndpoint = await Endpoint.findByIdAndDelete(id);
    return res.status(200).json(deletedEndpoint);
  } catch (error) {
    return res.status(400).json(error);
  }
}

module.exports = {
  getEndpoint,
  getEndpointById,
  postEndpoint,
  putEndpoint,
  deleteEndpoint
};
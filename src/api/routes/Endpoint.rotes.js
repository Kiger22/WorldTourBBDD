const { getEndpoint, getEndpointById, postEndpoint, deleteEndpoint, putEndpoint } = require("../controllers/Endpoint.controller");

const endpointRoutes = require("express").Router();

endpointRoutes.get("/", getEndpoint);
endpointRoutes.get("/:id", getEndpointById);
endpointRoutes.post("/", postEndpoint);
endpointRoutes.put("/:id", putEndpoint);
endpointRoutes.delete("/:id", deleteEndpoint);

module.exports = endpointRoutes;
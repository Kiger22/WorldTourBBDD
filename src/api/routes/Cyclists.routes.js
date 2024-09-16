const { getCyclist, getCyclistById, postCyclist, putCyclist, deleteCyclist, getCyclistByName, getCyclistByLocation, getCyclistByRanking } = require("../controllers/Cyclist.controllers");

const cyclistsRoutes = require("express").Router();

cyclistsRoutes.get("/", getCyclist);
cyclistsRoutes.get("/:id", getCyclistById);
cyclistsRoutes.get("/name/:nombre", getCyclistByName);
cyclistsRoutes.get("/location/:nacionalidad", getCyclistByLocation);
cyclistsRoutes.get("/ranking/:puestoRankingUCI", getCyclistByRanking);
cyclistsRoutes.post("/", postCyclist);
cyclistsRoutes.put("/:id", putCyclist);
cyclistsRoutes.delete("/:id", deleteCyclist);

module.exports = cyclistsRoutes;
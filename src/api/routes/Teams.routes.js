const { getTeam, getTeamById, getTeamByLocation, getTeamByName, getTeamByRanking, postTeam, putTeam, deleteTeam } = require("../controllers/Team.controllers");

const teamsRoutes = require("express").Router();

teamsRoutes.get("/", getTeam);
teamsRoutes.get("/:id", getTeamById);
teamsRoutes.get("/:nombre", getTeamByName);
teamsRoutes.get("/:nacionalidad", getTeamByLocation);
teamsRoutes.get("/:rankingUCI", getTeamByRanking);
teamsRoutes.post("/", postTeam);
teamsRoutes.put("/:id", putTeam);
teamsRoutes.delete("/:id", deleteTeam);

module.exports = teamsRoutes;
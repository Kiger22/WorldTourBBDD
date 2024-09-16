const mongoose = require("mongoose");
const Team = require("../../api/models/Team.model");
const teams = require("../../data/equiposWT");

mongoose
  .connect("mongodb+srv://kiger22:AIwAy1xm5UaEDWko@cluster0.5mvpi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(async () => {
    const allTeam = await Team.find();
    if (allTeam.length) {
      await Team.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Team.insertMany(teams);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
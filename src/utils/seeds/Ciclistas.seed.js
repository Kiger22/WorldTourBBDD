const mongoose = require("mongoose");
const Cyclist = require("../../api/models/Cyclist.model");
const cyclists = require("../../data/ciclistasWT.js");

mongoose
  .connect("mongodb+srv://kiger22:AIwAy1xm5UaEDWko@cluster0.5mvpi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(async () => {
    const allCyclist = await Cyclist.find();
    if (allCyclist.length) {
      await Cyclist.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Cyclist.insertMany(cyclists);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());

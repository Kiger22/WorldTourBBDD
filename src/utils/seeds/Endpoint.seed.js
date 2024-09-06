const mongoose = require("mongoose");
const Endpoint = require("../../api/models/Endpoint.model");
const endpoints = require("../../data/endpoints,js");

mongoose
  .connect("URL de nuestra BBDD")
  .then(async () => {
    const allEndpoint = await Endpoint.find();
    if (allEndpoint.length) {
      await Endpoint.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Endpoint.insertMany(endpoints);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());


require("dotenv").config();
const express = require("express");
const app = express();

PORT = process.env.PORT || 3000;

const { connectDB } = require("./src/config/db");
connectDB();

const router = express.Router();

// esta línea es para configurar que nuestro servidor pueda recibir req.body de formato json
app.use(express.json());
app.use("/", router);

app.use("*", (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || "Unexpected error");
});

app.listen(3000, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

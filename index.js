const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
require("./db");

// Initializations
const app = express();
app.use(express.json());

// Middlewares
app.use(morgan("dev"));
// Set security HTTP headers
app.use(helmet());
// To allow cross-origin requests
app.use(cors());

// Set port, listen for requests
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server on ${process.env.PORT}`);
});
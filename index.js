const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

// Initializations
const app = express();
app.use(express.json());

// middlewares
app.use(morgan("dev"));
// Set security HTTP headers
app.use(helmet());
//To allow cross-origin requests
app.use(cors());

// set port, listen for requests
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server on ${process.env.PORT}`);
});
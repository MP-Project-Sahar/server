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

// Routers
const roleRouter = require("./routers/routes/role");
app.use(roleRouter);

const authRouter = require("./routers/routes/auth");
app.use(authRouter);

const adminRouter = require("./routers/routes/admin");
app.use(adminRouter);

const userRouter = require("./routers/routes/user");
app.use(userRouter);

const itemRouter = require("./routers/routes/item");
app.use(itemRouter);

const reviewRouter = require("./routers/routes/review");
app.use(reviewRouter);

// Set port, listen for requests
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server on ${process.env.PORT}`);
});
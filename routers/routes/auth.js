const express = require("express");
const { checkEmail, signup } = require("../controllers/auth");

const authRouter = express.Router();

authRouter.post("/checkEmail", checkEmail);
authRouter.post("/signup", signup);

module.exports = authRouter;

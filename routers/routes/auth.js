const express = require("express");
const { checkEmail } = require("../controllers/auth");

const authRouter = express.Router();

authRouter.post("/checkEmail", checkEmail);

module.exports = authRouter;

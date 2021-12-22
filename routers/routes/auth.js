const express = require("express");
const { checkEmail, signup, login } = require("../controllers/auth");

const authRouter = express.Router();

authRouter.post("/checkEmail", checkEmail);
authRouter.post("/signup", signup);
authRouter.post("/login", login);

module.exports = authRouter;

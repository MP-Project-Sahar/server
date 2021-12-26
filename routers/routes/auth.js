const express = require("express");
const { checkEmail, signup, login, forgotPassword, resetPassword, verification } = require("../controllers/auth");

const authRouter = express.Router();

authRouter.post("/checkEmail", checkEmail);
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.put("/forgotPassword", forgotPassword);
authRouter.put("/resetPassword", resetPassword);
authRouter.get("/verification", verification);

module.exports = authRouter;

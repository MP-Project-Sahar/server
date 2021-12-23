const express = require("express");
const { checkEmail, signup, login, forgotPassword, resetPassword } = require("../controllers/auth");

const authRouter = express.Router();

authRouter.post("/checkEmail", checkEmail);
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.put("/forgotPassword", forgotPassword);
authRouter.put("/resetPassword", resetPassword);

module.exports = authRouter;

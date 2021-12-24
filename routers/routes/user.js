const express = require("express");
const { profile } = require("../controllers/user");

const userRouter = express.Router();

userRouter.get("/profile/:id", profile);

module.exports = userRouter;

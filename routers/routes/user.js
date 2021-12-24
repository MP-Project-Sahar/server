const express = require("express");
const { profile, items } = require("../controllers/user");

const userRouter = express.Router();

userRouter.get("/profile/:id", profile);
userRouter.get("/items/:category", items);

module.exports = userRouter;

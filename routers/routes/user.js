const express = require("express");
const { profile, usersProfile, items } = require("../controllers/user");

const userRouter = express.Router();

userRouter.get("/profile/:id", profile);
userRouter.get("/usersProfile/:id", usersProfile);
userRouter.get("/items/:category", items);

module.exports = userRouter;

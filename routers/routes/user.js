const express = require("express");
const {
  search,
  profile,
  usersProfile,
  editProfile,
  unable,
  users,
  editUser,
} = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/search", search);
userRouter.get("/profile/:id", profile);
userRouter.get("/usersProfile/:id", usersProfile);
userRouter.patch("/editProfile/:id", editProfile);
userRouter.patch("/unable/:id", unable);
userRouter.get("/users", users); // just admin
userRouter.patch("/editUser/:id", editUser); // just admin

module.exports = userRouter;

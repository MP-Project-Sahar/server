const express = require("express");
const {
  profile,
  favorites,
  rentals,
  usersProfile,
  editProfile,
  unable,
  users,
  editUser
} = require("../controllers/user");

const userRouter = express.Router();

userRouter.get("/profile/:id", profile);
userRouter.get("/favorites/:id", favorites);
userRouter.get("/rentals/:id", rentals);
userRouter.get("/usersProfile/:id", usersProfile);
userRouter.put("/editProfile", editProfile);
userRouter.put("/unable", unable);
userRouter.get("/users", users); // just admin
userRouter.put("/editUser", editUser); // just admin

module.exports = userRouter;

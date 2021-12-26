const express = require("express");
const {
  profile,
  favorites,
  rentals,
  usersProfile,
  addFavorite,
  bill,
  editProfile,
  unable,
  deleteFavorite
} = require("../controllers/user");

const userRouter = express.Router();

userRouter.get("/profile/:id", profile);
userRouter.get("/favorites/:id", favorites);
userRouter.get("/rentals/:id", rentals);
userRouter.get("/usersProfile/:id", usersProfile);
userRouter.post("/addFavorite", addFavorite);
userRouter.post("/bill", bill);
userRouter.put("/editProfile", editProfile);
userRouter.put("/unable", unable);
userRouter.delete("/deleteFavorite/:id", deleteFavorite);

module.exports = userRouter;

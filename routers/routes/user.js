const express = require("express");
const {
  profile,
  favorites,
  rentals,
  usersProfile,
  items,
  item,
  createItem,
  review,
  addFavorite
} = require("../controllers/user");

const userRouter = express.Router();

userRouter.get("/profile/:id", profile);
userRouter.get("/favorites/:id", favorites);
userRouter.get("/rentals/:id", rentals);
userRouter.get("/usersProfile/:id", usersProfile);
userRouter.get("/items/:category", items);
userRouter.get("/item/:id", item);
userRouter.post("/createItem", createItem);
userRouter.post("/review", review);
userRouter.post("/addFavorite", addFavorite);



module.exports = userRouter;

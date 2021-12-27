const express = require("express");
const {
  favorites,
  addFavorite,
  deleteFavorite
} = require("../controllers/favorite");

const favoriteRouter = express.Router();

favoriteRouter.post("/addFavorite", addFavorite);
favoriteRouter.delete("/deleteFavorite/:id", deleteFavorite);
favoriteRouter.get("/favorites/:id", favorites);

module.exports = favoriteRouter;

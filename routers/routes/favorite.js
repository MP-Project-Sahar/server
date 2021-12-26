const express = require("express");
const { addFavorite, deleteFavorite } = require("../controllers/favorite");

const favoriteRouter = express.Router();

favoriteRouter.post("/addFavorite", addFavorite);
favoriteRouter.delete("/deleteFavorite/:id", deleteFavorite);

module.exports = favoriteRouter;

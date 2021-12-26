const express = require("express");
const { items, item, createItem } = require("../controllers/item");

const itemRouter = express.Router();

itemRouter.post("/createItem", createItem);
itemRouter.get("/items/:category", items);
itemRouter.get("/item/:id", item);

module.exports = itemRouter;

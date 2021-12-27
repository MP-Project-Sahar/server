const express = require("express");
const {
  items,
  item,
  createItem,
  editItem,
  editItemAdmin
} = require("../controllers/item");

const itemRouter = express.Router();

itemRouter.post("/createItem", createItem);
itemRouter.get("/items/:category", items);
itemRouter.get("/item/:id", item);
itemRouter.patch("/editItem/:id", editItem);
itemRouter.patch("/editItemAdmin/:id", editItemAdmin); // just admin

module.exports = itemRouter;

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
itemRouter.put("/editItem", editItem);
itemRouter.put("/editItem", editItemAdmin); // just admin

module.exports = itemRouter;

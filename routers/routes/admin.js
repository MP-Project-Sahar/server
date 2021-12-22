const express = require("express");
const { users, editUser, editItem } = require("../controllers/admin");

const adminRouter = express.Router();

adminRouter.get("/users", users);
adminRouter.put("/editUser", editUser);
adminRouter.put("/editItem", editItem);

module.exports = adminRouter;

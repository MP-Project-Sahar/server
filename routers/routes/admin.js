const express = require("express");
const { users, editUser } = require("../controllers/admin");

const adminRouter = express.Router();

adminRouter.get("/users", users);
adminRouter.put("/editUser", editUser);

module.exports = adminRouter;

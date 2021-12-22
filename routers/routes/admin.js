const express = require("express");
const { users } = require("../controllers/admin");

const adminRouter = express.Router();

adminRouter.get("/users", users);

module.exports = adminRouter;

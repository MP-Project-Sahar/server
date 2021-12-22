const express = require("express");
const { create, roles } = require("../controllers/role");

const roleRouter = express.Router();

roleRouter.post("/createRole", create);
roleRouter.get("/roles", roles);

module.exports = roleRouter;

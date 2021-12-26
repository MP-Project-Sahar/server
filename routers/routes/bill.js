const express = require("express");
const { bill } = require("../controllers/bill");

const billRouter = express.Router();

billRouter.post("/bill", bill);

module.exports = billRouter;

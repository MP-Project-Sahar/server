const express = require("express");
const { bill, rentals } = require("../controllers/bill");

const billRouter = express.Router();

billRouter.post("/bill", bill);
billRouter.get("/rentals/:id", rentals);

module.exports = billRouter;

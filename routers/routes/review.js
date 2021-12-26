const express = require("express");
const { review, editReview } = require("../controllers/review");

const reviewRouter = express.Router();

reviewRouter.post("/review", review);
reviewRouter.put("/editReview", editReview); // just admin

module.exports = reviewRouter;

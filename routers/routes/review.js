const express = require("express");
const { review, editReview } = require("../controllers/review");

const reviewRouter = express.Router();

reviewRouter.post("/review/:id", review);
reviewRouter.patch("/editReview", editReview); // just admin

module.exports = reviewRouter;

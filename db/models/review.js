const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  renter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rate: { type: Number, required: true },
  reviw: { type: String },
  isDel: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", reviewSchema);

const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  coverImg: { type: String, required: true },
  imgs: { type: Array },
  title: { type: String, required: true },
  category: { type: String, required: true },
  desc: { type: String, required: true },
  priceDay: { type: Number, required: true },
  priceWeek: { type: Number },
  priceMonth: { type: Number },
  postCode: { type: Number, required: true },
  available: { type: Boolean, default: true },
  renter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isDel: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Item", itemSchema);

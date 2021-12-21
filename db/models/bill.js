const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
  renter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  price: { type: Number },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  checkedout: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Bill", billSchema);

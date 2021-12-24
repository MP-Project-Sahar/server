const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  itemLiked: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  renterLiked: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Favorite", favoriteSchema);

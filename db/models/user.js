const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    required: true,
    trim: true,
    lowercase: true
  },
  password: { type: String, required: true, minlength: 8, trim: true },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20
  },
  phoneNumber: { type: String, unique: true },
  avatar: {
    type: String,
    default:
      "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
  },
  city: {
    type: String
  },
  bio: {
    type: String
  },
  active: { type: Boolean, default: false },
  VerifyCode: { type: String, unique: true },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    default: "61c42b1a2af5b34f26df832a"
  },
  isDel: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);

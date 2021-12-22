const express = require("express");
const { users, editUser, editItem, editReview } = require("../controllers/admin");

const adminRouter = express.Router();

adminRouter.get("/users", users);
adminRouter.put("/editUser", editUser);
adminRouter.put("/editItem", editItem);
adminRouter.put("/editReview", editReview);

module.exports = adminRouter;

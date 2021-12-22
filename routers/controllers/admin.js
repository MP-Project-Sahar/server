const userModel = require("./../../db/models/user");

// Show all users
const users = (req, res) => {
  userModel
    .find({})
    .populate("role")
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = { users };

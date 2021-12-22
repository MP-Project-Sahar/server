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

const editUser = (req, res) => {
  const {
    id,
    email,
    password,
    fristName,
    lastName,
    phoneNumber,
    active,
    isDel
  } = req.body;

  userModel
    .findOneAndUpdate(
      { _id: id },
      { email, password, fristName, lastName, phoneNumber, active, isDel },
      { new: true }
    )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(304).send(err);
    });
};

module.exports = { users, editUser };

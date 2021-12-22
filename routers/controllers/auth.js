const userModel = require("./../../db/models/user");

const checkEmail = (req, res) => {
  const savedEmail = email.toLowerCase();
  userModel
    .findOne({
      email: savedEmail
    })
    .then((result) => {
      if (result) {
        res.status(200).send("Found");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = { checkEmail };

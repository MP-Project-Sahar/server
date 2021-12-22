const userModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");

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

const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const savedEmail = email.toLowerCase();
  const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT));

  const newUser = new userModel({
    email: savedEmail,
    password: hashedPassword,
    firstName,
    lastName
  });

  newUser
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = { checkEmail, signup };

const userModel = require("./../../db/models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const secret = process.env.secretKey;

// Check if email exist
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

// Signup
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

// Login
const login = (req, res) => {
  const { email, password } = req.body;

  const savedEmail = email.toLowerCase();

  userModel
    .findOne({ email: savedEmail })
    .populate("role")
    .then(async (result) => {
      if (result) {
        if (result.email == savedEmail) {
          const checkedPassword = await bcrypt.compare(
            password,
            result.password
          );
          if (checkedPassword) {
            const payload = {
              id: result._id,
              role: result.role,
              isDel: result.isDel
            };
            const options = { expiresIn: "1h" };
            const token = await jwt.sign(payload, secret, options);
            res.status(200).send({ result, token });
          } else {
            return res.status(404).send("Invalid email or password");
          }
        } else {
          res.status(404).send("Invalid email or password");
        }
      } else {
        res.status(404).send("User doesn't exist");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// forgot password
const forgotPassword = (req, res) => {
  const { email } = req.body;

  const savedEmail = email.toLowerCase();

  userModel
    .findOne({ email: savedEmail })
    .then(async (result) => {
      const payload = {
        _id: result._id,
        email: savedEmail
      };
      const options = { expiresIn: "1h" };
      const token = await jwt.sign(payload, secret, options);

      const data = {
        from: "norelay@myFirstEmail.com",
        to: savedEmail,
        subject: "Reset Passwoed",
        html: `<h2>Reset Password</h2>
          <a href="${process.env.URL}/resetPassword">Reset your password</a>
          `
      };
      userModel
        .findOneAndUpdate({ email: savedEmail }, { resetLink: token })
        .then(() => {
          mg.messages().send(data, (error) => {
            if (error) {
              res.status(400).send(error);
            } else {
              res.status(200).send({ token });
            }
          });
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = { checkEmail, signup, login, forgotPassword };

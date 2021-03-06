const userModel = require("./../../db/models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const emailvalidator = require("email-validator");
require("dotenv").config();
const secret = process.env.secretKey;

const mailgun = require("mailgun-js");
const DOMAIN = "sandbox093b95b4aa3d4d5abdba1595e7d10442.mailgun.org";
const mg = mailgun({ apiKey: process.env.api_key, domain: DOMAIN });

const client = require("twilio")(
  "AC15fc3b6216b413214d7b8ff7f073d34b",
  "1882427d2c27565046654224a5015551"
);

// Check if email exist
const checkEmail = (req, res) => {
  const { email } = req.body;
  const savedEmail = email.toLowerCase();

  if (emailvalidator.validate(savedEmail)) {
    userModel
      .findOne({
        email: savedEmail
      })
      .then((result) => {
        if (result) {
          res.status(200).send("Found");
        } else {
          res.status(400).send("Not Found");
        }
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } else {
    res.status(400).send("Invalid Email");
  }
};

// Signup
const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  /*
  At least 8 characters long
    2 letters
    2 digits
    1 Upper case
    1 Lower case
    1 Symbol 
  */
  const regexPassword =
    /^(?=(.*\d){2})(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/;

  const savedEmail = email.toLowerCase();

  if (password.match(regexPassword)) {
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT)
    );

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
  } else {
    res.status(400).send("Invalid password, make it more complex");
  }
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
              isDel: result.isDel,
              active: result.active
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

// Forgot password
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
          <a href="${process.env.URL}/resetPassword">Reset your password </a>
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

// Reset password
const resetPassword = async (req, res) => {
  const { resetLink, newPass } = req.body;

  const hashedPassword = await bcrypt.hash(newPass, Number(process.env.SALT));

  if (resetLink) {
    jwt.verify(resetLink, secret, (err) => {
      if (err) {
        res.status(401).send("Incorrect or expired link");
      } else {
        userModel
          .findOne({ resetLink })
          .then((result) => {
            if (result) {
              userModel
                .findOneAndUpdate(
                  { resetLink },
                  { password: hashedPassword, resetLink: "" }
                )
                .then(() => {
                  res.status(200).send("Reset successfully???");
                })
                .catch((err) => {
                  res.status(400).send(err);
                });
            }
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      }
    });
  } else {
    res.status(401).send("Authentication error");
  }
};

// Send verification
const verification = (req, res) => {
  client.messages
    .create({
      body: "Hello from Node",
      to: "+966505194188",
      from: "+12486716323"
    })
    .then((message) =>{ console.log(message) 
    res.status(200).send("send successfully???")})
    // here you can implement your fallback code
    .catch((error) => console.log(error));
};

module.exports = { checkEmail, signup, login, forgotPassword, resetPassword, verification };

const userModel = require("./../../db/models/user");
const itemModel = require("./../../db/models/item");
const reviewModel = require("./../../db/models/review");

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

// Edit user information
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

// Edit item information
const editItem = (req, res) => {
  const {
    id,
    coverImg,
    img,
    title,
    category,
    desc,
    priceDay,
    priceWeek,
    priceMonth,
    postCode,
    available,
    isDel
  } = req.body;

  itemModel
    .findOneAndUpdate(
      { _id: id },
      {
        coverImg,
        img,
        title,
        category,
        desc,
        priceDay,
        priceWeek,
        priceMonth,
        postCode,
        available,
        isDel
      },
      { new: true }
    )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(304).send(err);
    });
};

// Edit review information
const editReview = (req, res) => {
  const { id, rate, review, isDel } = req.body;

  reviewModel
    .findOneAndUpdate({ _id: id }, { owner, review, isDel }, { new: true })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(304).send(err);
    });
};

module.exports = { users, editUser, editItem, editReview };

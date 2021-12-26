const userModel = require("./../../db/models/user");
const itemModel = require("./../../db/models/item");
const reviewModel = require("./../../db/models/review");

// Show user profile
const profile = (req, res) => {
  const { id } = req.params;

  userModel
    .findOne({
      _id: id,
      // _id: req.token.id,
      isDel: false
    })
    .then(async (result) => {
      if (result) {
        const userItems = await itemModel.find({ user: id });
        if (userItems.length > 0) {
          res.status(200).send({ result, userItems });
        } else {
          res.status(200).send({ result, message: "Your store is empty" });
        }
      } else {
        res.status(404).send("Not found the user");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Show users profile
const usersProfile = (req, res) => {
  const { id } = req.params;

  userModel
    .findOne({
      _id: id,
      isDel: false
    })
    .then(async (result) => {
      if (result) {
        const userItems = await itemModel.find({ user: id });
        const userReview = await reviewModel.find({ user: id });
        if (userItems.length > 0 && userReview.length > 0) {
          res.status(200).send({ result, userItems, userReview });
        } else if (userItems.length > 0) {
          res.status(200).send({ result, userItems });
        } else if (userReview.length > 0) {
          res.status(200).send({ result, userReview });
        } else {
          res
            .status(200)
            .send({ result, message: "store and review are empty" });
        }
      } else {
        res.status(404).send("Not found the user");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Edit user's profile
const editProfile = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, avatar, city, bio } = req.body;

  userModel
    .findOneAndUpdate(
      { _id: id },
      { firstName, lastName, avatar, city, bio },
      { new: true }
    )
    .then((result) => {
      if (result) {
        res.status(200).send("Updated successfully✅");
      } else {
        res.status(404).send("Failed update⚠️");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Unable account
const unable = (req, res) => {
  const { id } = req.params;
  const { active } = req.body;

  userModel
    .findOneAndUpdate({ _id: id }, { active }, { new: true })
    .then((result) => {
      if (result) {
        res.status(200).send("Unable successfully✅");
      } else {
        res.status(404).send("Failed⚠️");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Show all users for admin
const users = (req, res) => {
  userModel
    .find({})
    .then(async (result) => {
      if (result) {
        const userItems = await itemModel.find({});
        const userReview = await reviewModel.find({});
        if (userItems.length > 0 && userReview.length > 0) {
          res.status(200).send({ result, userItems, userReview });
        } else if (userItems.length > 0) {
          res.status(200).send({ result, userItems });
        } else if (userReview.length > 0) {
          res.status(200).send({ result, userReview });
        } else {
          res
            .status(200)
            .send({ result, message: "store and review are empty" });
        }
      } else {
        res.status(404).send("Not found the user");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Edit user information for admin
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
      if (result.isDel) {
        itemModel
          .updateMany({ user: id }, { $set: { isDel: true } })
          .catch((err) => {
            res.status(400).send(err);
          });
        reviewModel
          .updateMany({ user: id }, { $set: { isLiked: false } })
          .then(() => {
            res.status(200).send("Deleted successfully✅");
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      } else if (!result.isDel) {
        res.status(400).send("Already deleted");
      }
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(304).send(err);
    });
};

module.exports = {
  profile,
  usersProfile,
  editProfile,
  unable,
  users,
  editUser
};

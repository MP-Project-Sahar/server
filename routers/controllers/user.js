const userModel = require("./../../db/models/user");
const itemModel = require("./../../db/models/item");
const reviewModel = require("./../../db/models/review");
const favoriteModel = require("./../../db/models/favorite");
const billModel = require("./../../db/models/bill");

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

// Show user's favorite
const favorites = (req, res) => {
  const { id } = req.params;

  favoriteModel
    .find({
      user: id
      // user: req.token.id,
    })
    .populate("itemLiked renterLiked")
    .then((result) => {
      if (result.length > 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send("You've got no favourites!");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Show user's rentals
const rentals = (req, res) => {
  const { id } = req.params;

  billModel
    .find({
      renter: id
      // user: req.token.id,
    })
    .populate("item owner")
    .then((result) => {
      if (result.length > 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send("No rentals yet");
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

// Show items by category
const items = (req, res) => {
  const { category } = req.params;

  itemModel
    .find({
      category: category,
      isDel: false
    })
    .then((result) => {
      if (result.length > 0) {
        res.status(200).send(result);
      } else {
        res.status(200).send("empty");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Show item
const item = (req, res) => {
  const { id } = req.params;

  itemModel
    .find({
      _id: id,
      isDel: false
    })
    .populate("renter")
    .then((result) => {
      if (result.length > 0) {
        res.status(200).send(result);
      } else {
        res.status(404).send("Not found the item");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// List item
const createItem = (req, res) => {
  const {
    coverImg,
    imgs,
    title,
    category,
    desc,
    priceDay,
    priceWeek,
    priceMonth,
    postCode,
    renter
  } = req.body;

  const newItem = new itemModel({
    coverImg,
    imgs,
    title,
    category,
    desc,
    priceDay,
    priceWeek,
    priceMonth,
    postCode,
    renter
    // renter: req.token.id
  });
  newItem
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Review user
const review = (req, res) => {
  const { renter, owner, rate, reviw } = req.body;

  const newReviw = new reviewModel({ renter, owner, rate, reviw });
  newReviw
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Add to favorite
const addFavorite = (req, res) => {
  const { user, itemLiked, renterLiked } = req.body;

  const newFavorite = new favoriteModel({ user, itemLiked, renterLiked });
  newFavorite
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// Create bill
const bill = (req, res) => {
  const { item, renter, owner, price, startDate, endDate } = req.body;

  const newBill = new billModel({
    item,
    renter,
    owner,
    price,
    startDate,
    endDate
  });
  newBill
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  profile,
  favorites,
  rentals,
  usersProfile,
  items,
  item,
  createItem,
  review,
  addFavorite,
  bill
};

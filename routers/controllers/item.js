const itemModel = require("./../../db/models/item");

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

module.exports = { items, item, createItem };

const billModel = require("./../../db/models/bill");

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

// Show user's rentals
const rentals = (req, res) => {
  const { id } = req.params;

  billModel
    .find({
      renter: id
      // renter: req.token.id,
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

module.exports = { bill, rentals };

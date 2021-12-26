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

module.exports = { bill };

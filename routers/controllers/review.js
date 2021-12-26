const reviewModel = require("./../../db/models/review");

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

// Edit review for admin
const editReview = (req, res) => {
  const { id, review, isDel } = req.body;

  reviewModel
    .findOneAndUpdate({ _id: id }, { review, isDel }, { new: true })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(304).send(err);
    });
};

module.exports = { review, editReview };

const reviewModel = require("./../../db/models/review");

// Review user
const review = (req, res) => {
  const { id } = req.params;
  const { owner, rate, review } = req.body;

  const newReviw = new reviewModel({ renter: id, owner, rate, review });
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

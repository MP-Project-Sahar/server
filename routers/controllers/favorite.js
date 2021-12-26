const favoriteModel = require("./../../db/models/favorite");

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

// Delete favorite
const deleteFavorite = (req, res) => {
  const { id } = req.params;

  favoriteModel
    .findOneAndDelete({ _id: id })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = { favorites, addFavorite, deleteFavorite };

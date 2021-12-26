const favoriteModel = require("./../../db/models/favorite");

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

module.exports = { addFavorite, deleteFavorite };

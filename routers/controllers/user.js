const userModel = require("./../../db/models/user");

const profile = (req, res) => {
  const { id } = req.params;

  userModel
    .findOne({
      _id: id,
      isDel: false
    })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = { profile };

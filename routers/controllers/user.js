const userModel = require("./../../db/models/user");
const itemModel = require("./../../db/models/user");

// Show user info. and item 
const profile = (req, res) => {
  const { id } = req.params;

  userModel
    .findOne({
      _id: id, 
      isDel: false
    })
    .then(async (result) => {
      if(result){
        const userItems = await itemModel.find({user: id})
        res.status(200).send({result, userItems});
      }else{
        res.status(404).send("Your store is empty");
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
      if(result){
        res.status(200).send(result);
      }else{
        res.status(404).send("empty");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = { profile, items };

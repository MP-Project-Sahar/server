const userAuth = (req, res, next) => {
  try {
    if (!req.token.isDel && !req.token.active) {
      next();
    } else {
      return res.status(404).send({ message: "forbidden" });
    }
  } catch (error) {
    res.status(403).send(error);
  }
};

module.exports = userAuth;

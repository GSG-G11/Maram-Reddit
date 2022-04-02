const { getUserNameQuery } = require('../database/queries');

const getUserName = (req, res, next) => {
  const { userId } = req;
  getUserNameQuery(userId)
    .then((data) => {
      console.log(data,"user info");
      res.json(data.rows);
    }).catch((err) => {
      next(err);
    });
};

module.exports = {
  getUserName,
};

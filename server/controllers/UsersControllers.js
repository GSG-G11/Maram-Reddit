const { getUserNameQuery } = require('../database/queries');

const getUserName = (req, res, next) => {
  const { userId } = req;
  getUserNameQuery(userId)
    .then((data) => {
      res.json(data.rows[0].user_name);
    }).catch((err) => {
      next(err);
    });
};

module.exports = {
  getUserName,
};

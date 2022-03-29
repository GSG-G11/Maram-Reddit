const { checkToken } = require('../utils');

const authMiddleware = (req, res, next) => {
  const cookie = req.cookies;
  const { token } = cookie;
   console.log(token);
  if (!token) return res.status(302).redirect('/');
  return checkToken(token)
    .then(() => {
      next();
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = authMiddleware;

const { getUniqueEmailQuery } = require('../database');
const { costumizesErr } = require('../utils');
const signUpSchema = require('../utils/Validation/authSchema');

const signUp = (req, res, next) => {
  signUpSchema
    .validateAsync(req.body)
    .then(() => getUniqueEmailQuery(req.body.email))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(costumizesErr(err.details[0].message));
      } else {
        next(err);
      }
    });
  res.end();
};
module.exports = {
  signUp,
};

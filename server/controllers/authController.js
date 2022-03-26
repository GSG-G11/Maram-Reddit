const { hash } = require('bcryptjs');
const { getUniqueEmailQuery, signUpQuery } = require('../database');
const { costumizesErr, signToken } = require('../utils');
const signUpSchema = require('../utils/Validation/authSchema');

const signUp = (req, res, next) => {
  const { user_name, email, password} = req.body;
  signUpSchema
    .validateAsync(req.body)
    .then(() => getUniqueEmailQuery(email))
    .then(({ rowCount }) => {
      if (rowCount) {
        throw costumizesErr('Email Is Already Exist', 400);
      } else {
        return hash(password, 8);
      }
    }).then((hashPassword) => signUpQuery({ user_name, email, password: hashPassword }))
    .then(({ rows }) => signToken({ userId: rows.id }))
    .then((token) => {
      res.cookie('token', token).json('Sign Up');
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(costumizesErr(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};
module.exports = {
  signUp,
};

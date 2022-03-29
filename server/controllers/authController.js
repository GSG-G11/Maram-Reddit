const { hash, compare } = require('bcryptjs');
const { getUniqueEmailQuery, signUpQuery, loginQuery } = require('../database');
const { costumizesErr, signToken } = require('../utils');
const { signUpSchema, loginSchema } = require('../utils/Validation/authSchema');

const signUp = (req, res, next) => {
  const { user_name, email, password } = req.body;
  signUpSchema
    .validateAsync(req.body)
    .then(() => getUniqueEmailQuery(email))
    .then(({ rowCount }) => {
      if (rowCount) {
        throw costumizesErr('Email Is Already Exist', 400);
      } else {
        return hash(password, 8);
      }
    })
    .then((hashPassword) =>
      signUpQuery({ user_name, email, password: hashPassword })
    )
    .then(({ rows }) => signToken({ userId: rows.id }))
    .then((token) => {
      res.cookie('token', token).json({ message: 'you are signed up successfully' });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(costumizesErr(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  loginSchema
    .validateAsync(req.body)
    .then(({ email }) => loginQuery(email))
    .then((data) => {
      if (data.rowCount) {
        userId = data.rows[0].id;
        return compare(password, data.rows[0].password);
      }
    })
    .then((value) => {
      if (value === true) {
        return signToken({ id: userId });
      } else {
        throw costumizesErr('You do not have account , please login....', 400);
      }
    })
    .then((token ) => {
      res.cookie('token', token).json({ message: 'Welcome again ' });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.json({ massage: err });
      } else {
        next(err);
      }
    });
};

const logout = (req, res) => {
  res.clearCookie('token').json({ massage: 'You are logout ' });
};
module.exports = {
  signUp,
  login,
  logout,
};

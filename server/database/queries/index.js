const { getUniqueEmailQuery } = require('./getUniqueQuery');
const { signUpQuery, loginQuery } = require('./authQueries');

module.exports = {
  getUniqueEmailQuery,
  loginQuery,
  signUpQuery,
};

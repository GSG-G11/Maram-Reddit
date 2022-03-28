const { getUniqueEmailQuery } = require('./queries/getUniqueQuery');
const { signUpQuery, loginQuery } = require('./queries/authQueries');

module.exports = {
  getUniqueEmailQuery,
  loginQuery,
  signUpQuery,
};

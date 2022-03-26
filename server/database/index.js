const getUniqueEmailQuery = require('./queries/getUniqueEmailQuery');
const { signUpQuery } = require('./queries/authQueries');

module.exports = {
  getUniqueEmailQuery,
  signUpQuery,
};

const { getUniqueEmailQuery } = require('./getUniqueQuery');
const { signUpQuery, loginQuery } = require('./authQueries');
const { addPost } = require('./PostsQueries');

module.exports = {
  getUniqueEmailQuery,
  loginQuery,
  signUpQuery,
  addPost,
};

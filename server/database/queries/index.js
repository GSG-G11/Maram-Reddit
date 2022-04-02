const { getUniqueEmailQuery, getUserNameQuery } = require('./getUniqueQuery');
const { signUpQuery, loginQuery } = require('./authQueries');
const { addPost } = require('./PostsQueries');

module.exports = {
  getUniqueEmailQuery,
  getUserNameQuery,
  loginQuery,
  signUpQuery,
  addPost,
};

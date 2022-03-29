const addPostQuery = require('../database/queries/PostsQueries');

const addPost = (req, res) => {
  addPostQuery(req.body).then((data) => console.log(data));
};
module.exports = addPost;

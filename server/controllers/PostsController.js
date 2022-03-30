const { addPostQuery, getAllPostsQuery } = require('../database/queries/PostsQueries');

const addPost = (req, res, next) => {
  const { content } = req.body;
  const user_id = req.userId;
  console.log(user_id,"user id ");
  addPostQuery(user_id, content).then((data) => {
    console.log(data);
    res.status(201).json({
      message: 'post added successfully',
      post: data.rows,
    });
  }).catch((err) => {
    next(err);
  });
};

const getAllPosts = (req, res, next) => {
  getAllPostsQuery()
    .then((data) => {
      res.status(200).json(data.rows);
    }).catch((err) => next(err));
};
module.exports = {
  addPost,
  getAllPosts,
};

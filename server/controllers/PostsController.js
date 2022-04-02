const {
  addPostQuery,
  getAllPostsQuery,
  getSinglePostQuery,
  getUserPostsQuery,
} = require("../database/queries/PostsQueries");

const addPost = (req, res, next) => {
  const { content } = req.body;
  const user_id = req.userId;
  addPostQuery(user_id, content)
    .then((data) => {
      res.status(201).json({
        status: 201,
        message: "post added successfully",
        post: data.rows,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const getAllPosts = (req, res, next) => {
  getAllPostsQuery()
    .then((data) => {
      res.status(200).json(data.rows);
    })
    .catch((err) => next(err));
};
const getSinglePost = (req, res, next) => {
  const { id } = req.params;
  getSinglePostQuery(id)
    .then((data) => {
      res.json(data.rows[0]);
    })
    .catch((err) => next(err));
};

const getUserPosts = (req, res, next) => {
  const { id } = req.params;
  getUserPostsQuery(id)
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = {
  addPost,
  getAllPosts,
  getSinglePost,
  getUserPosts,
};

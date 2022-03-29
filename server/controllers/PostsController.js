const addPostQuery = require('../database/queries/PostsQueries');

const addPost = (req, res) => {
  addPostQuery(req.body).then((data) => {
    console.log(data);
    res.status(201).json({
      message: 'post added successfully',
      post: data.rows[0],
    });
  }).catch(() => res.json({ message: 'error' }));
};
module.exports = addPost;

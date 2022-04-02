const connection = require('../config/connection');

const addPostQuery = (user_id, content) => {
  const sql = {
    text: 'INSERT INTO posts (user_id,content)  VALUES ($1,$2) Returning *',
    values: [user_id,content],
  };
  return connection.query(sql);
};

const getAllPostsQuery = () => {
  const sql = {
    text: 'select posts.id ,users.user_name ,posts.user_id, posts.content from posts join users on posts.user_id = users.id',
    values: [],
  };
  return connection.query(sql);
};

const getSinglePostQuery = (id) => {
  const sql = {
    text: 'select posts.id ,users.user_name , posts.content from posts join users on posts.user_id = users.id where posts.id = $1',
    values: [id],
  };
  return connection.query(sql);
};

const getUserPostsQuery = (userId) => {
  const sql = {
    text: 'select posts.id,posts.content, posts.user_id, users.user_name from  posts join users on posts.user_id = users.id where posts.user_id = $1 ',
    values: [userId],
  };
  return connection.query(sql);
};
module.exports = {
  addPostQuery,
  getAllPostsQuery,
  getSinglePostQuery,
  getUserPostsQuery,
};

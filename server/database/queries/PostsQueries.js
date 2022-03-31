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
    text: 'select users.user_name , posts.content from posts join users on posts.user_id = users.id',
    values: [],
  };
  return connection.query(sql);
};
module.exports = {
  addPostQuery,
  getAllPostsQuery,
};

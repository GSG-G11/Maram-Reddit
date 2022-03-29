const connection = require('../config/connection');

const addPostQuery = ({ user_id, title, content }) => {
  const sql = {
    text: 'INSERT INTO posts (user_id, title,content)  VALUES ($1, $2, $3) Returning *',
    values: [user_id, title, content],
  };
  return connection.query(sql);
};

module.exports = addPostQuery;

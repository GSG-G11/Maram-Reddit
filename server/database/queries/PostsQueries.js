const connection = require('../config/connection');

const addPostQuery = ({ username, title, content }) => {
  const sql = {
    text: 'INSERT INTO posts (username,title,content) VALUES ($1, $2, $3) RETURNING *',
    values: [username, title, content],
  };
  return connection.query(sql);
};

module.exports = addPostQuery;

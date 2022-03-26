const connection = require('../config/connection');

const signUpQuery = ({ user_name, email, password }) => {
  const sql = {
    text: 'INSERT INTO users (user_name,email,password) VALUES ($1,$2,$3)  Returning *',
    values: [user_name, email, password],
  };
  return connection.query(sql);
};

module.exports = {
  signUpQuery,
};

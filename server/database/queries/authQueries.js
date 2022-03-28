const connection = require('../config/connection');

const signUpQuery = ({ user_name, email, password }) => {
  const sql = {
    text: 'INSERT INTO users (user_name,email,password) VALUES ($1,$2,$3)  Returning id,user_name,email',
    values: [user_name, email, password],
  };
  return connection.query(sql);
};

const loginQuery = (email) => {
  const sql = {
    text: 'select * from users where email = $1',
    values: [email],
  };
  return connection.query(sql);
};
module.exports = {
  loginQuery,
  signUpQuery,
};

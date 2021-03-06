const connection = require('../config/connection');

const getUniqueEmailQuery = (email) => {
  const sql = {
    text: 'select email from users where email = $1',
    values: [email],
  };
  return connection.query(sql);
};

const getUserNameQuery = (userId) => {
  const sql = {
    text: 'select users.user_name , users.id  from users where users.id = $1',
    values: [userId],
  };
  return connection.query(sql);
};
module.exports = {
  getUniqueEmailQuery,
  getUserNameQuery,
};

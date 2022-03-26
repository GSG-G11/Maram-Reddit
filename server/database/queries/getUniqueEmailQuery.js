const connection = require('../config/connection');

const getUniqueEmailQuery = (email) => {
  const sql = {
    test: 'select email form users where email=$1',
    Values: [email],
  };
  return connection.query(sql);
};

module.exports = getUniqueEmailQuery;

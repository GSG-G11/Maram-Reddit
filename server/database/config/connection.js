require('env2')('.env');
const { Pool } = require('pg');

let DBURL = '';

if (process.env.NODE_ENV === 'DEV') {
  DBURL = process.env.DB_DEV;
} else {
  throw new Error('Not Found DataBase');
}
const connection = new Pool({
  connectionString: DBURL,
  ssl: false,
});

module.exports = connection;

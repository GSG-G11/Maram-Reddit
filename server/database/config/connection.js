require('env2')('.env');
const { Pool } = require('pg');

let DBURL = '';

if (process.env.NODE_ENV === 'DEV') {
  DBURL = DB_DEV;
}
const connection = new Pool({
  connectionString: DBURL,
  ssl: false,
});

module.exports = connection;

require('env2')('.env');
const { sign } = require('jsonwebtoken');

const signToken = (data) => new Promise((resolve, reject) => {
  sign(data, process.env.SECRET_KEY, (err, payload) => {
    if (err) reject(err);
    else resolve(payload);
  });
});

module.exports = signToken;

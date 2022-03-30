require('env2')('.env');
const { sign, verify } = require('jsonwebtoken');

const signToken = (data) => new Promise((resolve, reject) => {
  sign(data, process.env.SECRET_KEY, (err, payload) => {
    if (err) reject(err);
    else resolve(payload);
  });
});
const checkToken = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) reject(err);
    else resolve(decoded);
    
  });
});
module.exports = {
  signToken,
  checkToken,
};

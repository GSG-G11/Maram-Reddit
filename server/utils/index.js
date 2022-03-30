const { signUpSchema, loginSchema } = require('./Validation/authSchema');
const { costumizesErr } = require('./Validation/costumizesErr');
const { signToken, checkToken } = require('./FunPromise/tokenPromise');

module.exports = {
  signUpSchema,
  loginSchema,
  costumizesErr,
  signToken,
  checkToken,
};

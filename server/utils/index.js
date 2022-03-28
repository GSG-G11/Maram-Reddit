const { signUpSchema, loginSchema } = require('./Validation/authSchema');
const { costumizesErr } = require('./Validation/costumizesErr');
const signToken = require('./FunPromise/signToken');

module.exports = {
  signUpSchema,
  loginSchema,
  costumizesErr,
  signToken,

};

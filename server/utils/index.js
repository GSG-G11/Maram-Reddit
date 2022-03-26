const authSchema = require('./Validation/authSchema');
const { costumizesErr } = require('./Validation/costumizesErr');
const signToken = require('./FunPromise/signToken');

module.exports = {
  authSchema,
  costumizesErr,
  signToken,

};

const signUpSchema = require('../utils/Validation/authSchema');

const signUp = (req, res) => {
  signUpSchema.validateAsync(req.body)
    .then((result) =>console.log(result));
  res.end();
};
module.exports = {
  signUp,
};

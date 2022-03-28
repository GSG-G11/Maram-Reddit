const joi = require('joi');

const signUpSchema = joi.object({
  user_name: joi.string().alphanum().min(3).max(8)
    .required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().required().min(8),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(8).required(),
});

module.exports = {
  signUpSchema,
  loginSchema,
};

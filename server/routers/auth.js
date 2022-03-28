const authRouter = require('express').Router();
const { signUp, login } = require('../controllers/authController');

authRouter.post('/signUp', signUp);
authRouter.post('/login', login);
module.exports = authRouter;

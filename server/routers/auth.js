const authRouter = require('express').Router();
const { signUp, login, logout } = require('../controllers/authController');

authRouter.post('/signUp', signUp);
authRouter.post('/login', login);
authRouter.get('/logout', logout);
module.exports = authRouter;

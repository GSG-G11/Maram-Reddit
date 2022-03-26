const authRouter = require('express').Router();
const { signUp } = require('../controllers/authController');

authRouter.post('/signUp', signUp);
module.exports = authRouter;

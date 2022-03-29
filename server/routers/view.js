const { join } = require('path');
const viewRouter = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');

viewRouter.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'index.html'));
});

viewRouter.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'login.html'));
});

viewRouter.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'signup.html'));
});

viewRouter.get('/home', authMiddleware, (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'home.html'));
});
module.exports = viewRouter;

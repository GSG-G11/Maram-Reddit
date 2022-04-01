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
  res.sendFile(join(__dirname, '..', '..', 'views', 'signUp.html'));
});

viewRouter.get('/home', authMiddleware, (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'home.html'));
});
viewRouter.get('/posts/:id/show', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'singlePost.html'));
});
module.exports = viewRouter;

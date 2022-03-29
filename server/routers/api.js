const apiRouter = require('express').Router();
const PostsController = require('../controllers/PostsController');

apiRouter.post('/addPost', PostsController);

module.exports = apiRouter;

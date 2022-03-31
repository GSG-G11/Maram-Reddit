const apiRouter = require('express').Router();
const PostsController = require('../controllers/PostsController');
const UsersControllers = require('../controllers/UsersControllers');
const authMiddleware = require('../middlewares/authMiddleware');

apiRouter.post('/addPost', authMiddleware, PostsController.addPost);
apiRouter.get('/getAllPosts', PostsController.getAllPosts);
apiRouter.get('/user', authMiddleware, UsersControllers.getUserName);

module.exports = apiRouter;

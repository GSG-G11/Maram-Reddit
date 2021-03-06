const apiRouter = require('express').Router();
const PostsController = require('../controllers/PostsController');
const UsersControllers = require('../controllers/UsersControllers');
const authMiddleware = require('../middlewares/authMiddleware');

apiRouter.post('/addPost', authMiddleware, PostsController.addPost);
apiRouter.get('/getAllPosts', PostsController.getAllPosts);
apiRouter.get('/posts/:id', PostsController.getSinglePost);
apiRouter.get('/user/:id/profile', authMiddleware, PostsController.getUserPosts);
apiRouter.get('/user', authMiddleware, UsersControllers.getUserName);

module.exports = apiRouter;

const apiRouter = require('express').Router();
const PostsController = require('../controllers/PostsController');
const authMiddleware = require('../middlewares/authMiddleware');

apiRouter.post('/addPost', authMiddleware, PostsController.addPost);
apiRouter.get('/getAllPosts', PostsController.getAllPosts);

module.exports = apiRouter;

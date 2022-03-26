const router = require('express').Router();
const apiRouter = require('./api');
const viewRouter = require('./view');
const authRouter = require('./auth');

router.use('/api/v1', apiRouter);
router.use('/', viewRouter);
router.use('/auth', authRouter);

module.exports = router;

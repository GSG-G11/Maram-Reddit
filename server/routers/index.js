const router = require('express').Router();
const apiRouter = require('./api');
const viewRouter = require('./view');

router.use('/api/v1', apiRouter);
router.use('/', viewRouter);

module.exports = router;

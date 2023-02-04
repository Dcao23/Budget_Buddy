const router = require('express').Router();
const api = require('./apiRoutes/index');
const homeRoutes= require('./homeRoute');

router.use('/', homeRoutes)
router.use('/api', api);

module.exports = router;
const router = require('express').Router();
const user = require('./apiRoutes/index');

router.use('/user', user);

module.exports = router;
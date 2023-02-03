const router = require('express').Router();
const api = require('./apiRoutes/index');

router.use('/api', api);

module.exports = router;
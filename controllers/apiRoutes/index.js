const router = require('express').Router();
const userRoutes = require('./userRoute');
const liabilities = require('./liabilitiesRoute');
const financial = require('./financialRoute');
const assets = require('./assetsRoute');

router.use('/user', userRoutes);
router.use('/liabilities', liabilities);
router.use('/financial', financial);
router.use('/assets', assets);

module.exports = router;
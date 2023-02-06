const router = require('express').Router();
const userRoutes = require('./userRoute');
const liabilities = require('./liabilityRoute');
const financial = require('./financialRoute');
const asset = require('./assetsRoute');

router.use('/user', userRoutes);
router.use('/liabilities', liabilities);
router.use('/financial', financial);
router.use('/assets', asset);

module.exports = router;
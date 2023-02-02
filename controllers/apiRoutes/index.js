const router = require('express').Router();
const userRoutes = require('./userRoute');
const liabilities = require('./liabilitiesRoute');
const financial = require('./financialRoute');
const assets = require('./assetsRoute');

router.use('/users', userRoutes);
router.use('/liabilities', liabilities);
router.use('/financial', userRoutes);
router.use('/assets', userRoutes);

module.exports = router;
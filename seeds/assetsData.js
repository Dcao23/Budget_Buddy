const { Asset } = require('../models');

const assetData = [
    {
        id: 1,
        monthly_income: 60.11,
        vehicles: 1500,
        properties: 1300,
        savings: 1240.12,
         user_id: 1
    }
];

const seedAssets = () => Asset.bulkCreate(assetData);

module.exports = seedAssets;
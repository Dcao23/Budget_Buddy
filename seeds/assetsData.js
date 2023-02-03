const { Asset } = require('../models');

const assetData = [
    {
        id: 600,
        monthy_income: 6000.11,
        vehicles: 8000.12,
        properties: 1300.12,
        savings: 1240.12,
        user_id: 1
    },
    {
        id: 900,
        monthy_income: 6430.11,
        vehicles: 3829.12,
        properties: 3829.12,
        savings: 2827.12,
        user_id: 1
    },
    {
        id: 245,
        monthy_income: 38399.11,
        vehicles: 29278.12,
        properties: 3923.12,
        savings: 3929.12,
        user_id: 1
    },
];

const seedAssets = () => Asset.bulkCreate(assetData);

module.exports = seedAssets;
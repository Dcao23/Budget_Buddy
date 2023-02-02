const { Assets } = require('../models');

const assetData = [
    {
        id: 600,
        assets_id: 700,
        monthy_income: 6000.11,
        vehicles: 8000.12,
        properties: 1300.12,
        savings: 1240.12,
    },
    {
        id: 900,
        assets_id: 1200,
        monthy_income: 6430.11,
        vehicles: 3829.12,
        properties: 3829.12,
        savings: 2827.12,
    },
    {
        id: 245,
        assets_id: 293,
        monthy_income: 38399.11,
        vehicles: 29278.12,
        properties: 3923.12,
        savings: 3929.12,
    },
];

const seedAssets = () => Assets.bulkCreate(assetData);

module.exports = seedAssets;

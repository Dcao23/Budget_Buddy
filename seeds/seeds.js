const seedLiabilities = require('./liabilitiesData');

const sequelize = require('../config/connection');
const seedAssets = require('./assetsData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedLiabilities();
    console.log('\n----- LIABILITIES SEEDED -----\n');
    await seedGoals();
    console.log('\n----- LIABILITIES SEEDED -----\n');
    await seedAssets();
    console.log('\n----- LIABILITIES SEEDED -----\n');

    process.exit(0);
};

seedAll();

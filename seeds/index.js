const sequelize = require('../config/connection');
const seedAssets = require('./assetsData');
const seedUser = require('./seedUser');
const seedGoals = require('./goalsData');
const seedLiabilities = require('./liabilityData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedLiabilities();
    console.log('\n----- LIABILITIES SEEDED -----\n');
    await seedGoals();
    console.log('\n----- LIABILITIES SEEDED -----\n');
    await seedAssets();
    console.log('\n----- LIABILITIES SEEDED -----\n');
    await seedUser();
    console.log('\n----- LIABILITIES SEEDED -----\n');
    process.exit(0);
};

seedAll();

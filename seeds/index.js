const seedLiability = require('./liabilityData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedLiability();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    process.exit(0);
};

seedAll();

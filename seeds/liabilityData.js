const { Liability } = require('../models');

const liabilityData = [
    {
        id: 1,
        auto_loan: 6000.11,
        personal_loan: 8000.12,
        mortgage_rent: 1300.12,
        credit_card: 1240.12,
        student_loan: 124022.01,
        utilities: 134.21,
        user_id: 1
    }
];

const seedLiability = () => Liability.bulkCreate(liabilityData);

module.exports = seedLiability;

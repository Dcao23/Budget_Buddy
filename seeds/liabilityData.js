const { Liability } = require('../models');

const liabilityData = [
    {
        id: 600,
        auto_loan: 6000.11,
        personal_loan: 8000.12,
        mortgage_rent: 1300.12,
        credit_card: 1240.12,
        student_loan: 124022.01,
        utilities: 134.21,
        user_id: 1
    },
    {
        id: 900,
        auto_loan: 6430.11,
        personal_loan: 3829.12,
        mortgage_rent: 3829.12,
        credit_card: 2827.12,
        student_loan: 2939.01,
        utilities: 232.21,
        user_id: 2
    },
    {
        id: 3894,
        auto_loan: 38399.11,
        personal_loan: 29278.12,
        mortgage_rent: 3923.12,
        credit_card: 3929.12,
        student_loan: 3928.01,
        utilities: 253.21,
        user_id: 3
    },
    {
        id: 2342,
        auto_loan: 38399.11,
        personal_loan: 29278.12,
        mortgage_rent: 3923.12,
        credit_card: 3929.12,
        student_loan: 3928.01,
        utilities: 253.21,
        user_id: 4
    },
    {
        id: 2445,
        auto_loan: 38399.11,
        personal_loan: 29278.12,
        mortgage_rent: 3923.12,
        credit_card: 3929.12,
        student_loan: 3928.01,
        utilities: 253.21,
        user_id: 5
    },
];

const seedLiability = () => Liability.bulkCreate(liabilityData);

module.exports = seedLiability;

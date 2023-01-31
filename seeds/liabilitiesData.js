const { Liabilities } = require('../models');

const liabilityData = [
    {
        id: 600,
        liabilities_id: 700,
        auto_loan: 6000.11,
        personal_loan: 8000.12,
        mortgage_rent: 1300.12,
        credit_card: 1240.12,
        student_loan: 124022.01,
        utilities: 134.21,
    },
    {
        id: 900,
        liabilities_id: 1200,
        auto_loan: 6430.11,
        personal_loan: 3829.12,
        mortgage_rent: 3829.12,
        credit_card: 2827.12,
        student_loan: 2939.01,
        utilities: 232.21,
    },
    {
        id: 245,
        liabilities_id: 293,
        auto_loan: 38399.11,
        personal_loan: 29278.12,
        mortgage_rent: 3923.12,
        credit_card: 3929.12,
        student_loan: 3928.01,
        utilities: 253.21,
    },
];

const seedLiabilities = () => Liabilities.bulkCreate(liabilityData);

module.exports = seedLiabilities;

const { FinancialGoals } = require('../models');

const goalsData = [
    {
        id: 600,
        goal_id: 21,
        goal_title: 'new car',
        goal_price: 8000.12,
        monthly_contr: 50.12,
    },
    {
        id: 900,
        goal_id: 45,
        goal_title: 'house downpayment',
        goal_price: 10000.12,
        monthly_contr: 13.12,
    },
    {
        id: 245,
        goal_id: 23,
        goal_title: 'vacation',
        goal_price: 2278.12,
        monthly_contr: 21.12,
    },
];

const seedGoals = () => FinancialGoals.bulkCreate(goalsData);

module.exports = seedGoals;

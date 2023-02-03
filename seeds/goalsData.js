const { FinancialGoal } = require('../models');

const goalsData = [
    {
        id: 600,
        goal_title: 'new car',
        goal_price: 8000.12,
        monthly_contr: 50.12,
        user_id:1
    },
    {
        id: 900,
        goal_title: 'house downpayment',
        goal_price: 10000.12,
        monthly_contr: 13.12,
        user_id:1
    },
    {
        id: 245,
        goal_title: 'vacation',
        goal_price: 2278.12,
        monthly_contr: 21.12,
        user_id:1
    },
];

const seedGoals = () => FinancialGoal.bulkCreate(goalsData);

module.exports = seedGoals;
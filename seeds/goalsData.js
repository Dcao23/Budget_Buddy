const { FinancialGoal } = require('../models');

const goalsData = [
    {
        id: 1,
        goal_title: 'new car',
        goal_price: 8000.12,
        monthly_contr: 50.12,
        user_id: 1
    }
];

const seedGoals = () => FinancialGoal.bulkCreate(goalsData);

module.exports = seedGoals;

const User = require('./User')
const Asset = require('./Asset')
const FinancialGoal = require('./FinancialGoal')
const Liability = require('./Liability')

// Asset.belongsTo(User,{
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// })

// Liability.belongsTo(User,{
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// })

// FinancialGoal.belongsTo(User,{
//     foreignKey:'user_id'
// })

module.exports = {User, Asset, FinancialGoal, Liability};
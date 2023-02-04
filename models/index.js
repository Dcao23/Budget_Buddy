const User = require('./User')
const Asset = require('./Asset')
const FinancialGoal = require('./FinancialGoal')
const Liability = require('./Liability')

User.hasMany(Asset, {
    foreignKey: 'user_id'
})

User.hasMany(Liability, {
    foreignKey: 'user_id'
})

User.hasMany(FinancialGoal, {
    foreignKey: 'user_id'
})

FinancialGoal.belongsTo(User, {
    foreignKey: 'user_id'
})

Liability.belongsTo(User, {
    foreignKey: 'user_id'
})

Asset.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Asset, FinancialGoal, Liability };
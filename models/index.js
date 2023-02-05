const User = require('./User')
const Asset = require('./Asset')
const FinancialGoal = require('./FinancialGoal')
const Liability = require('./Liability')

 User.hasOne(Asset,{
     foreignKey: 'user_id',
     onDelete: 'CASCADE'
 });

 Asset.belongsTo(User,{
    foreignKey: 'user_id'
 });

 User.hasOne(Liability,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Liability.belongsTo(User,{
    foreignKey:'user_id'
});

User.hasMany(FinancialGoal,{
    foreignKey:'user_id',
    onDelete: 'CASCADE'
});

FinancialGoal.belongsTo(User,{
    foreignKey:'user_id'
});

module.exports = { User, Asset, FinancialGoal, Liability };
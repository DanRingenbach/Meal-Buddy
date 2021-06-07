const Users = require('./users');
const Meals = require('./meals');
const Days = require('./days');

Users.hasMany(Meals, {
    foreignKey: 'meal_id'
});

Meals.belongsTo(Users, {
    foreignKey: 'meal_id'
});

Days.belongsToMany(Meals, {
    through: 'days_id'
});

module.exports = { Users, Meals, Days };
const Users = require('./users');
const Meals = require('./meals');
const Days = require('./days');

Users.hasMany(Meals, {
    foreignKey: 'user_id'
});

Meals.belongsTo(Users, {
    foreignKey: 'user_id'
});


module.exports = { Users, Meals, Days };
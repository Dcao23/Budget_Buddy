const { User } = require('../models');

const UserData = [
    {
        "name": "Sal",
        "email": "sal@hotmail.com",
        "password": "password12345"
    },
    {
        "name": "Lernantino",
        "email": "lernantino@gmail.com",
        "password": "password12345"
    }
];

const seedUser = () => User.bulkCreate(UserData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;
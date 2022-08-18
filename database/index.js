const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/shadowRealm.sqlite',
    logging: console.log
});
module.exports = sequelize;
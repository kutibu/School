const { Sequelize } = require('sequelize');

module.exports = new Sequelize('school','root','' ,{
    dialect: 'mysql',
    host: 'localhost'
});
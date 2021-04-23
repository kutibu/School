const { Sequelize } = require('sequelize');

module.exports = {
    init: () => {
        new Sequelize('school', 'root', '', {
            dialect: 'mysql',
            host: 'localhost'
        });
    }
}
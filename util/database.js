const { Sequelize } = require('sequelize');

module.exports = new Sequelize('school', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

/* Base de données */

/*const sequelize = new Sequelize('school', 'root', '', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});*/
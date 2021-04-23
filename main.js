// const Discord = require('discord.js');

// const { ReactionCollector } = require('discord.js');
const { Client, Collection } = require('discord.js');
const { loadEvents, loadCommands } = require('./util/loader');

const client = new Client();
client.config = require("./config");
// require bdd ?
["commands"].forEach(x => client[x] = new Collection());
loadEvents(client);
loadCommands(client);
// déclaration bdd ?
client.login(client.config.TOKEN);


/* Base de données */

/*const sequelize = new Sequelize('school', 'root', '', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});*/

// client.on('ready', () => require("./Events/ready")(client));
// client.on('messageReactionAdd', reaction => require("./Events/messageReactionAdd.js")(reaction, user));
// client.on('messageReactionRemove', reaction => require("./Events/messageReactionRemove.js")(reaction, user));
// client.on('disconnect', () => message.channels.cache.get('833722353560191026').send("Je suis Offline"));
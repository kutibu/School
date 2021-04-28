const { Client, Collection } = require('discord.js');
const { loadEvents, loadCommands } = require('./util/loader');

const client = new Client();
client.config = require("./config");
client.sequelize = require("./util/sequelize");
["commands"].forEach(x => client[x] = new Collection());
loadEvents(client);
loadCommands(client);
client.sequelize.init();
client.login(client.config.TOKEN);
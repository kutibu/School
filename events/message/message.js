const { Collection } = require('discord.js');
const { PREFIX } = require('../../config');
module.exports = async(client, message) => {
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const user = message.mentions.users.first();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));

    if (!command) return;
    if (command.help.args && !args.length) {
        let noArgsReply = `Il nous faut des arguments pour cette commande, ${message.author}`;
        if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande \`${PREFIX}${command.help.name} ${command.help.usage}\``
        return message.channel.send(noArgsReply);
    }
    command.run(client, message, args);
}
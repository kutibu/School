const { MESSAGES } = require("../../util/constants");

module.exports.run = (client) => {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
}
module.exports.help = MESSAGES.COMMANDS.MISC.PING;
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client) => {
    const welcomeChannel = bot.channels.get("name", "welcome")
    welcomeChannel.sendMessage("Welcome\n" + member.user.username);
}

module.exports.help = MESSAGES.COMMANDS.MISC.TEST;
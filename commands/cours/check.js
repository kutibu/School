const { MESSAGES } = require("../../util/constants");

module.exports.run = (client) => {
    // Check élève
    // Use a promise to wait for the question to reach Discord first
    message.channel.send('Which emoji do you prefer?').then((question) => {
        // Have our bot guide the user by reacting with the correct reactions
        question.react('👍');
        question.react('👎');

        // Set a filter to ONLY grab those reactions & discard the reactions from the bot
        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && !user.bot;
        };

        // Create the collector
        const collector = question.createReactionCollector(filter, {
            max: 2,
            time: 150000
        });

        collector.on('end', (collected, reason, user) => {
            if (reason === 'time') {
                message.channel.send('Ran out of time ☹...');
            } else {
                // Grab the first reaction in the array
                let userReaction = collected.array()[0];
                // Grab the name of the reaction (which is the emoji itself)
                let emoji = userReaction._emoji.name;

                // Handle accordingly
                if (emoji === '👍') {
                    console.log(`Collected  ${client.user.tag}`);
                    message.channel.send(' Glad your reaction is 👍!');
                } else if (emoji === '👎') {
                    message.channel.send(' Sorry your reaction is 👎');
                } else {
                    // This should be filtered out, but handle it just in case
                    message.channel.send(`I dont understand ${emoji}...`);
                }
            }
        })
    })
}
module.exports.help = MESSAGES.COMMANDS.COURS.CHECK;
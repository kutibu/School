const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
//  () ()
// \(;-;)/ 
//  ( . ) 
//   L L
module.exports.run = (client, message, args) => {

    // client.on('messageReactionAdd', (reaction, user) => {
    //     if (reaction.emoji.name === "✅") {
    //         console.log(reaction.users);
    //     }
    // });
    try {
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields({ name: 'Regular field title', value: 'Some value here' }, { name: '\u200B', value: '\u200B' }, { name: 'Inline field title', value: 'Some value here', inline: true }, { name: 'Inline field title', value: 'Some value here', inline: true }, )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        channel.send(exampleEmbed);


    } catch (error) {}

}
module.exports.help = MESSAGES.COMMANDS.COURS.HISTORIQUE;
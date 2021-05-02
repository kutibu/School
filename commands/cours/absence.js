const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const Absent = require("../../models/Absent");

module.exports.run = (client, message, args) => {
    //Nombre d'absence d'un étudiant
    let nomEleve;
    message.channel.send(`Bilan d'absence ...`);

    if (args[0]) {
        nomEleve = args[0] + " " + args[1];

        async function abs() {
            const bilan = await Absent.findAll({
                where: {
                    NomEleve: args[0] + " " + args[1]
                }
            });
        
            const exampleEmbed = new MessageEmbed()
            .setColor('#4C1B1B')
            .setTitle('Cours : ' + message.channel.name)
            .setAuthor('Professeur : ' + message.author.username)
            .setTimestamp(message.createdAt)
            .addFields(
                { name: "Nom de l'étudiant absent :", value: nomEleve },
                { name: "Nombre d'absence :", value: bilan.length }
            );

            message.channel.send(exampleEmbed)
        }
        
        abs();

        
    } else {
        message.reply("ERREUR : la classe ou groupe " + "'" + args[0] + "'" + " n'existe pas");
    }
}
module.exports.help = MESSAGES.COMMANDS.COURS.ABSENCE;
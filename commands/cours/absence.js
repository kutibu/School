const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const Absent = require("../../models/Absent");

module.exports.run = (client, message, args) => {
    //liste des étudiants absents selon une date donnée
    let nomEleve;
    //let Abslength;
    message.channel.send(`Bilan d'absence ...`);

    if (args[0]) {
        nomEleve = args[0] + " " + args[1];


        
        // async function functionAbsent() {
        //     const absent = await Absent.findAll({
        //         where: {
        //             NomEleve: args[0]
        //         }
        //     });
        //     console.log(absent);
        // }

        // functionAbsent();

        async function abs() {
            const bilan = await Absent.findAll({
                where: {
                    NomEleve: args[0] + " " + args[1]
                }
            });
            /*storedBalances.forEach(bilan => {
                console.log(bilan.NomEleve);
            });*/

            //Abslength = bilan.length;
            //console.log(abslength);
            const exampleEmbed = new MessageEmbed()
            .setColor('#4C1B1B')
            .setTitle('Cours : ' + message.channel.name)
            .setAuthor('Professeur : ' + message.author.username)
            // .setDescription("Ces etudiants sont absents")
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
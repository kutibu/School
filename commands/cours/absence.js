const { MESSAGES } = require("../../util/constants");

module.exports.run = (client) => {
    //liste des étudiants absents selon une date donnée
    let nomEleve;
    message.channel.send(`I dont understand ...`);

    if (args[0] === "students") {
        nomEleve = args[0]
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#4C1B1B')
            .setTitle('Cours : ' + message.channel.name)
            .setAuthor('Professeur : ' + message.author.username)
            // .setDescription("Ces etudiants sont absents")
            .setTimestamp(message.createdAt)
            .addFields({ name: "Nom de l'étudiant absent :", value: nomEleve });

        message.channel.send(exampleEmbed)




    } else {
        message.reply("ERREUR : la classe ou groupe " + "'" + args[0] + "'" + " n'existe pas");
    }
}
module.exports.help = MESSAGES.COMMANDS.COURS.ABSENCE;
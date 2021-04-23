const { MESSAGES } = require("../../util/constants");

module.exports.run = (client) => {
    // Formulaire à cocher | Commande : appel | Paramètre(s) : [0] Nom de la classe/groupe
    let roleEleve;
    let myRole;

    if (args[0] === "lp-fi" || args[0] === "lp-app") {
        roleEleve = args[0];
        listRoleEleve = message.guild.roles.cache.find(role => role.name === roleEleve).members;

        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Cours : ' + message.channel.name)
            .setAuthor('Professeur : ' + message.author.username)
            .setDescription("Veuillez cocher l'emoji ✅ afin de confirmer votre présence. ")
            .addFields({ name: 'Heure du cours :', value: message.createdAt.getHours() + "h" + message.createdAt.getMinutes() }, { name: "Nombre d'élèves total dans la classe/groupe :", value: roleEleve + " : " + listRoleEleve.size }, );

        message.channel.send(exampleEmbed).then((question) => {
            question.react('✅').then(() => {
                const filter = reaction => reaction.emoji.name === '✅';
                question.awaitReactions(filter, { time: 5000 })
                    .then(collected => message.channel.send(`${collected.size} réaction`))
                    .catch(console.error);
            });

            setTimeout(() => {

                //const oui = question.reactions.cache.filter(reaction => reaction.users.cache.has("309730668487639040"));
                message.reply('L\'appel est terminer')

            }, 5000);

        })

    } else {
        message.reply("ERREUR : la classe ou groupe " + "'" + args[0] + "'" + " n'existe pas");
    }
}
module.exports.help = MESSAGES.COMMANDS.COURS.APPEL;
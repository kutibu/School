const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const Present = require("../../models/Present");
const Absent = require("../../models/Absent");

var tableau = [];
module.exports.run = async (client, message, args, MessageReaction) => {
  // Formulaire à cocher | Commande : appel | Paramètre(s) : [0] Nom de la classe/groupe
  // const member = message.guild.members.cache.get(user.id);
  let roleEleve;
  let myRole;
  var listUsers = [];
  var listClasse = [];
  var listUsersAbsent = [];
  const cours = message.channel.name;
  const prof = message.author.username;
  const heure = message.createdAt.getHours() + ":" + message.createdAt.getMinutes();

  if (args[0] === "lp-fi" || args[0] === "lp-app") {
    roleEleve = args[0];
    listRoleEleve = message.guild.roles.cache.find(
      (role) => role.name === roleEleve
    ).members;

    const exampleEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Cours : " + message.channel.name)
      .setAuthor("Professeur : " + message.author.username)
      .setDescription(
        "Veuillez cocher l'emoji ✅ afin de confirmer votre présence. "
      )
      .addFields(
        {
          name: "Heure du cours :",
          value:
            message.createdAt.getHours() + "h" + message.createdAt.getMinutes(),
        },
        {
          name: "Nombre d'élèves total dans la classe/groupe :",
          value: roleEleve + " : " + listRoleEleve.size,
        }
      );

    message.channel.send(exampleEmbed).then((question) => {
      question.react("✅").then(() => {
        const filter = (reaction) => reaction.emoji.name === "✅";
        question
          .awaitReactions(filter, { time: 5000 })
          .then((collected) => {
            collected.forEach((element) => {
              element.users.cache.each((user) => {
                //console.log("test 1 : " + user.username);
                const oui = message.guild.members.cache.get(user.id);
                if (oui.nickname != null) {
                  listUsers.push(oui.nickname);
                }
              });
            });
            /* ENVOIE SQL *************************************************************/

            listRoleEleve.forEach((eleve) => {
              listClasse.push(eleve.nickname);
            });

            listClasse.forEach((eleveActu) => {
              if (listUsers.indexOf(eleveActu) === -1) {
                if (eleveActu != null) {
                  listUsersAbsent.push(eleveActu);
                }
              }
            });

            console.log("liste classe =" + listClasse);
            console.log("liste absent =" + listUsersAbsent);
            console.log("liste présent =" + listUsers);
            console.log(cours);
            console.log(prof);
            console.log(heure);
            console.log(roleEleve);
            var d = new Date();
            var date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay();
            console.log(date);

            listUsers.forEach((eleve) => {
              Present.create({
                NomEleve: eleve,
                Classe: roleEleve,
                Date: date,
                Cours: cours,
                Heure: heure,
                createdAt: "2021-04-26",
                updatedAt: "2021-04-26"
              });
            });

            listUsersAbsent.forEach((eleve) => {
              Absent.create({
                NomEleve: eleve,
                Classe: roleEleve,
                Date: date,
                Cours: cours,
                Heure: heure,
                createdAt: "2021-04-26",
                updatedAt: "2021-04-26"
              });
            });


            console.log("toto");
      
            /* FIN ENVOIE SQLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL*/
          })
          .catch(console.error);
      });

      setTimeout(() => {
        message.reply("L'appel est terminé");
      }, 5000);
    });
  } else {
    message.reply(
      "ERREUR : la classe ou groupe " + "'" + args[0] + "'" + " n'existe pas"
    );
  }
};
module.exports.help = MESSAGES.COMMANDS.COURS.APPEL;

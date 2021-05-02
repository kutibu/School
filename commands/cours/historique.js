const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const Present = require("../../models/Present");
const Absent = require("../../models/Absent");

module.exports.run = (client, message, args) => {

    const cours = "compelement-informatique";
    const heure = "13h00";
    
    //const date = "2021-04-30";
    


    async function liste() {
        const bilan = await Present.findAll({
            where: {
                Classe: "lp-fi"
            }
        });
        //console.log(date);
        //var nom;
        const abs = await Absent.findAll({
            where: {
                Classe: "lp-fi"
            }
        });

        const exampleEmbed = new MessageEmbed()
                .setColor('#4C1B1B')
                .setTitle("La liste des appels d'aujourd'hui ")
                .setTimestamp(message.createdAt)
                /*bilan.forEach((eleve) => {
                    console.log(eleve.NomEleve);
                    nom = eleve.NomEleve;
                    exampleEmbed.addField(
                        `${eleve.filter(el => el === eleve.toLowerCase()).map(elv => elv.NomEleve).join(', ')}`
                    )
                });*/
                    exampleEmbed.addField(
                        `voici la liste des élèves présent :`,
                        `${bilan.map(elv => elv.NomEleve).join(', \n')}`
                    );

                    exampleEmbed.addField(
                        `voici la liste des élèves absent :`,
                        `${abs.map(elv => elv.NomEleve).join(', \n')}`
                    );
            message.channel.send(exampleEmbed)
    }

    liste();

}
module.exports.help = MESSAGES.COMMANDS.COURS.HISTORIQUE;
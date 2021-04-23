const Appel = require('../../models/Appel');
const db = require('../../database');
//Toutes les actions à faire quand le bot se connecte
module.exports = client => {
    console.log("Mon BOT est Connecté");
    Appel.init(db);
    Appel.sync();

    /*client.guils.cache.find(guild => guild.id === "780783443058491393").channels.cache.find(channel => channel.id === "833722353560191026").message.fetch("834712751582347284").then(message => {
      console.log("message bien ajouté a la memoire");
    });*/

    db.authenticate()
        .then(() => {
            console.log('connecter a la BDD');

        }).catch((err) => console.log(err));

    client.user.setActivity(`${client.user.username}`);
};
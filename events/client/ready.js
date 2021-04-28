//Toutes les actions à faire quand le bot se connecte
module.exports = client => {
    console.log(`Logged in as ${client.user.tag}!`);
    let statuses = [
            `Message Un`,
            `Message Deux`,
            `Message Trois`,
            `Message Quatre`
        ],
        i = 0;

    setInterval(function() {
            let status = statuses[i++ % statuses.length];
            client.user.setActivity(status, { type: "WATCHING" })
        }, 5000)
        /*client.guils.cache.find(guild => guild.id === "780783443058491393").channels.cache.find(channel => channel.id === "833722353560191026").message.fetch("834712751582347284").then(message => {
          console.log("message bien ajouté a la memoire");
        });*/
    client.user.setActivity(`${client.user.username}`);
};
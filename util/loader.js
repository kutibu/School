const { readdirSync } = require("fs");
//chargement des Commandes
const loadCommands = (client, dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
        for (const file of commands) {
            const getFileName = require(`../${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`Commande chargée : ${getFileName.help.name}`);
        };
    });
};
//chargement des événements
const loadEvents = (client, dir = "./events/") => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
        for (const event of events) {
            const evt = require(`../${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            console.log(`Event chargé : ${evtName}`);
            client.on(evtName, evt.bind(null, client));
        };
    });
};

module.exports = {
    loadCommands,
    loadEvents
}
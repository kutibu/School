var tableau = [];

module.exports = (reaction, MessageReaction, user) => {
        const message = MessageReaction.message;
        const member = message.guild.members.cache.get(user.id);
        const channel = message.guild.channels.cache.find(c => c.id === '833722353560191026');
        if (member.user.bot) return;

        if (message.channel.id === channel.id) {
            console.log("MessageReactionRemove check");
            console.log(`${member.nickname === null ? `${user.username}` : `${member.nickname}`}`);
            const nomEleve = `${member.nickname === null ? `${user.username}` : `${member.nickname}`}`;
            tableau.push(nomEleve);
            console.log(tableau);
        }

    // if (reaction.emoji.name === "✅") client.channels.cache.get("833722353560191026").send(`Réaction :` + reaction.emoji.name);
};
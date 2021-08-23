const {MessageEmbed} = require("discord.js")

module.exports = {
    name: "ping",
    description: "Ping!",
    execute(message) {
        const embed3 = new MessageEmbed()
        .setTitle("Pong!")
        .setColor("RANDOM")

        message.channel.send(embed3)
    },
};
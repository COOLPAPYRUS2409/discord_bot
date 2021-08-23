const {MessageEmbed} = require("discord.js");


module.exports = {
    name: "say",
    description: "Repeat what you just said",
    execute(message, args) {
        if (!args.length) {
            return message.channel.send("Please provide something for me to repeat")
        } 
        
        const embed5 = new MessageEmbed()
        .setTitle(`${args[0]}`)

       
        message.channel.send(embed5);
    },
};
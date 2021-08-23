const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    description: "Guide through every commands of this bot",
    execute(message, args) {
        const embed1 = new MessageEmbed()
        .setTitle(`help command executed by ${message.author.username}`)
        .setDescription("My prefix is `H!`")
        .setColor("RANDOM")
        .addFields(
            {name: "Pinging", value: "Just type in `H!ping`"},
            {name: "Pruning", value: "Type in `P!prune <amount of message not more than 99>`"},
            {name: "Server Information", value: "Type in `P!server` to get your server information"},
            {name: "User Information", value: "Type `P!user` to get your user information"},
            {name: "Arguement info(for fun nothing more nothing less)", value: "Just type in `P!args`"},
            {name: "Avatar", value: "Show others avatar by typing in `P!avatar <ping someone here>`"},
            {name: "Muting", value: "Mute someone by typing `P!mute <someone here>`"},
            {name: "Unmute", value: "Unmute someone by typing `P!unmute`"},
            {name: "Say", value: "Type in `P!say <something here>` to let me repeat the word you said"},
            {name: "Random Number Picker", value: "Type in `P!number` to let me help you pick a random number"}
        ) 
        
        message.channel.send(embed1);
    },
};
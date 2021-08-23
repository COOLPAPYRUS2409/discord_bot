const {MessageEmbed} = require("discord.js");

module.exports = {
	name: 'user',
	description: 'Display info about yourself.',
	execute(message) {
		const embed6 = new MessageEmbed()
		.setTitle(`${message.author.username}'s profile`)
		.setColor("RANDOM")
		.addFields (
			{name: `${message.author.username}'s tag`, value: `${message.author.tag}`},
			{name: `${message.author.username}'s ID`, value: `${message.author.id}`},
			{name: `${message.author.username}'s avatar`,value: `${message.author.displayAvatarURL({ dynamic:true })}`}
		)

		message.channel.send(embed6)
	},
};
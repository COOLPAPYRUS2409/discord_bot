const { Message } = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	execute(message) {
		const embed2 = new MessageEmbed()
		.setTitle(`Server Info command executed by ${message.author.username}`)
		.setDescription("Server info as below")
		.setColor("RANDOM")
		.addFields (
			{name: "Server name", value: `${message.guild.name}`},
			{name: "Member count", value: `${message.guild.memberCount}`}
		)

		message.channel.send(embed2)
	},
};
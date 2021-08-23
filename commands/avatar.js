module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar is ${message.author.displayAvatarURL({ dynamic: false })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: false })}`;
		});

		message.channel.send(avatarList);
	},
};
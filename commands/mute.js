module.exports = {
  name: "mute",
  description: "mutes the mentioned user",
  execute(message, args) {
    const mutedRole = message.guild.roles.cache.get("859263562124099594");
    const target = message.mentions.members.first();

    target.roles.add(mutedRole);
    message.channel.send("Muted " + target).then(msg => { msg.react("✅") }).catch();
  },
};
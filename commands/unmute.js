module.exports = {
    name: "unmute",
    description: "unmutes the mentioned user",
    execute(message, args) {
      const mutedRole = message.guild.roles.cache.get("863753611733631007");
      const target = message.mentions.members.first();
  
      target.roles.remove(mutedRole);
      message.channel.send("Unmuted " + target).then(msg => { msg.react("✅") }).catch();
    },
};
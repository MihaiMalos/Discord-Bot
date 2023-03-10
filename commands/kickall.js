exports.run = (client, message, prefix) => {
    if(message.author.id === "238718268049719296") {
        message.guild.members.forEach(member => {
            message.guild.member(member).kick();
            })}
   }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kickall',
  description: 'Schimba jocul bot-ului',
  usage: 'game'
};

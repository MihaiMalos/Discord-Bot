
exports.run = async (client, message, args) => {
  var nick = args
  var mentionedUser = message.mentions.users.first()
  let guildUser = message.guild.fetchMember(mentionedUser);
  let test = message.content.split(" ").slice(2);
  if(!message.member.hasPermission('MANAGE_NICKNAMES')) return  message.channel.send("🔥 Nu ai permisiunea necesara!")
  message.channel.send("✅ Comanda executata! Acum toti vor avea numele default"),
  message.guild.members.forEach(member => {
      message.guild.members.get(member.id).setNickname(` `)
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'revert',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

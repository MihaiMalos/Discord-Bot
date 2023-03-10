
exports.run = async (client, message, args) => {
  var nick = args
  var mentionedUser = message.mentions.users.first()
  let guildUser = message.guild.fetchMember(mentionedUser);
  let test = message.content.split(" ").slice(2);
  if (args.length < 1) return message.channel.send("Ai uitat sa specifici numele!")
  if(!message.member.hasPermission('MANAGE_NICKNAMES')) return  message.channel.send("🔥 Nu ai permisiunea necesara!")
  message.channel.send("✅ Comanda executata! Acum toti vor avea numele __**" + test.join(" ") + "**__"),
  message.guild.members.forEach(member => {
      message.guild.members.get(member.id).setNickname(`${test.join(" ")}`)
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'massnick',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

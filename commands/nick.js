
exports.run = async (client, message, args) => {
  var nick = args
  var mentionedUser = message.mentions.users.first()
  let guildUser = message.guild.fetchMember(mentionedUser);
  let test = message.content.split(" ").slice(2);
  if(!message.member.hasPermission('MANAGE_NICKNAMES')) return  message.channel.send("🔥 Nu ai permisiunea necesara!");
  if (!mentionedUser) return message.channel.send("🔥 Ai uitat de mention!")
  if (!args[1]) return message.channel.send("🔥 Ai uitat sa specifici numele cu care vrei sa il schimbi!")
if (args[1]) {
  message.guild.members.get(mentionedUser.id).setNickname(test.join(" "))
  message.channel.send("✅ Nume schimbat cu succes in __**" + test.join(" ") + "**__ !")
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nick',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

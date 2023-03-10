
exports.run = (client, message, args) => {
  client.unbanAuth = message.author;
  const user = client.users.find('username', args.join(" "));
  if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("🔥 Nu ai permisiunea!")
  if (args.length < 1) return message.channel.send("Ai uitat sa specifici numele!")
  if (!user) return message.channel.send('🔥 User-ul dat nu are ban sau nu exista!').catch(console.error);
  message.channel.send(":ok_hand: Unbanned")
  message.guild.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

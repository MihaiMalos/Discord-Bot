exports.run = (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("🔥 Nu ai permisiunea!")
  const messagecount = parseInt(args.join(' '));
  if (args[0]) {
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.send("Au fost sterse " + messagecount + " mesage")
}
  if (!args[0]) {
    message.channel.send("Ai uitat sa specifici un numar intre 2 si 100!")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Sterge X mesaje de pe canalul repsectiv.',
  usage: 'purge <numar>'
};

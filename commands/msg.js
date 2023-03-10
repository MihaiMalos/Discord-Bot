
exports.run = async (client, message, args) => {
  var mentionedUser = message.mentions.users.first()
  let guildUser = message.guild.fetchMember(mentionedUser);
  let test = message.content.split(" ").slice(2);
  if (test[0]) {
    mentionedUser.send(test.join(" "));
  } else {
  if (!test[0]) {
    message.channel.send("Ai uitat de mention/text!");
  } else {
  if (!mentionedUser[0]) {
    message.channel.send("Ai uitat de mention/text!");
  }
}
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'msg',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

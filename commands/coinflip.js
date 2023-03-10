exports.run = async (client, message, args) => {
  var prefix = "-"
  var args3 = message.content.substring(prefix.length).split(" ");
  var randomItem = require("random-item")
  
  message.channel.send("A picat: `" + randomItem(["cap", "pajura"]) + "`");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['flip'],
  permLevel: 0
};

exports.help = {
  name: 'coinflip',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

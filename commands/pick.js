exports.run = async (client, message, args) => {
  var prefix = "-"
  var args3 = message.content.substring(prefix.length).split(" ");
  var randomItem = require("random-item")
  
  if (!args[1]) {
    message.channel.send(":x: Utilizare corecta: -pick [obiect1] [obiect2]")
  }
 if (args[1]) { 
  message.channel.send("Am ales: __" + randomItem([args[0], args[1]]) + "__");
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['choose'],
  permLevel: 0
};

exports.help = {
  name: 'pick',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

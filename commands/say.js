const {RichEmbed} = require('discord.js');
exports.run = async (client, message, args) => {
  let argss = message.content.split(" ").slice(1);
  if (args.length < 1) return message.channel.send("Ai uitat de text!")
    const sayMessage = argss.join(" ");
    message.delete(); 
    message.channel.send(sayMessage);

  }

exports.conf = {
  enabled: true,
  aliases: ['say2'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Fa botul sa spuna ceva.',
  usage: 'say [mesaj]'
};

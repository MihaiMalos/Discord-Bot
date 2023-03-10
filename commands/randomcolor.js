exports.run = async (client, message, args) => {
  var Discord = require("discord.js")
  var randomColor = require("randomcolor")
  const rgbHex = require('rgb-hex');

  var b = randomColor({
    format: 'rgb'
  });
  var a = rgbHex(b);
  

  const embed = new Discord.RichEmbed()
  .setColor(a)
  .addField("Hex", `#${a}`)
  .addField("RGB", b)
  .setThumbnail(`https://color.dyno.gg/color/${a}/80x80.png`)
  message.channel.send({embed});


}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rc'],
  permLevel: 0
};

exports.help = {
  name: 'randomcolor',
  description: 'Avertizeaza un membru.',
  usage: '8ball [mention] [motiv]'
};

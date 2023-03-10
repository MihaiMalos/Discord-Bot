exports.run = async (client, message, args, discord) => {
  const translate = require('translate-google')
  const Discord = require('discord.js');
  if (args.length < 1) return message.channel.send("Ai uitat sa specifici fraza/cuvantul de tradus!")
 translate(args.join(" "), {to: 'ro'}).then(res => {
  const embed = new Discord.RichEmbed()
  .setAuthor("Google Translate", "https://is3-ssl.mzstatic.com/image/thumb/Purple62/v4/3b/11/a8/3b11a897-de7d-6954-2e5d-f92a20d62ee3/logo_translate_color-1x_U007emarketing-85-220-0-5.png/246x0w.jpg")
  .addField("\nCuvant: __" + args.join(" ") + "__", "Traducere: `" + res + "`")
  .setFooter("Google Translate", "https://is3-ssl.mzstatic.com/image/thumb/Purple62/v4/3b/11/a8/3b11a897-de7d-6954-2e5d-f92a20d62ee3/logo_translate_color-1x_U007emarketing-85-220-0-5.png/246x0w.jpg")
  .setTimestamp()
  message.channel.send({embed});
 }).catch(err => {
     console.error(err)
 })
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['translate', 'traduce'],
  permLevel: 0
};

exports.help = {
  name: 'traducere',
  description: 'Avertizeaza un membru.',
  usage: '8ball [mention] [motiv]'
};

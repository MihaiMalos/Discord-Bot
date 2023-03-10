exports.run = async (client, message, args) => {
var Discord = require("discord.js")
var Jimp = require("jimp");
if (!args[0]) return message.channel.send("Ai uitat sa introduci textul!")
Jimp.read("imagini/text_cmd.jpg", function (err, image) {
  message.channel.send("👌 Imaginea se proceseaza...")
  Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) {
    image.print(font, 2, 262, args.join(" "));
    image.write("imagini/text_scris.png");
    var imagine = new Discord.Attachment("imagini/text_scris.png");
    setTimeout(function(){
    message.channel.send(imagine)
  }, 1000);
});
});
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'text',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

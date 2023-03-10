

exports.run = async (client, message, args) => {
  var args3 = message.content.substring(1).split("!");
  var Imgflipper = require("imgflipper");



  if (!args3[2]) return message.channel.send("Utilizare corecta: ![id template] ![text de sus] ![text de jos]\nTemplate-uri: https://mmbot.cf/templates")

  var img = function (err, url) {
    message.channel.send({
      "embed": {
              title: `Meme generat de ${message.author.username}`,
              url: 'https://www.youtube.com/channel/UCqj59rUP2weI3At1EJmwaZQ?',
              "image": {
              "url": url,
              }
          }
      });
                };
 
var imgflipper = new Imgflipper("mmbot", "lool123@");


imgflipper.generateMeme(args3[1], args3[2], args3[3], img);
};

var prefix = "-"
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

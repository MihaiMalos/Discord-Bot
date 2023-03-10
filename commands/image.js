exports.run = async (client, message, args) => {
var Discord = require("discord.js")
var Jimp = require("jimp");
let user = message.mentions.users.first()
if (args[0] !== "resize" && args[0] !== "flip" && args[0] !== "rotate" && args[0] !== "invert" && args[0] !== "blur2" && args[0] !== "blur" && args[0] !== "posterize" && args[0] !== "sepia" && args[0] !== "pixelate") return message.channel.send("Utilizare corecta: -image [tip] {mention}\n[] = obligatoriu\n{} = optional\n\nTipuri:\n> `resize`\n> `flip`\n> `rotate`\n> `invert`\n> `blur`\n> `blur2`\n> `posterize`\n> `sepia`\n> `pixelate`");
if (!user) {

Jimp.read(message.author.avatarURL, function (err, image) {
  Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) {
    if (args[0] === "resize") {
      image.resize(64, 64)
    }
    if (args[0] === "flip") {
      image.rotate(180)
    }
    if (args[0] === "rotate") {
      image.rotate(300)
    }
    if (args[0] === "invert") {
      image.invert()
    }
    if (args[0] === "blur") {
      image.blur(5)
    }
    if (args[0] === "blur2") {
      image.gaussian(2)
    }
    if (args[0] === "posterize") {
      image.posterize(5)
    }
    if (args[0] === "sepia") {
      image.sepia()
    }
    if (args[0] === "pixelate") {
      image.pixelate(9)
    }
    message.channel.send("👌 Imaginea se proceseaza...")
    image.write("imagini/imagine_cu_efect.png");
    var imagine = new Discord.Attachment("imagini/imagine_cu_efect.png");
    setTimeout(function(){
      message.channel.send(imagine)
  }, 1000);
});
});
}


if (user) {

  Jimp.read(user.avatarURL, function (err, image) {
    Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) {
      if (args[0] === "resize") {
        image.resize(64, 64)
      }
      if (args[0] === "flip") {
        image.rotate(180)
      }
      if (args[0] === "rotate") {
        image.rotate(300)
      }
      if (args[0] === "invert") {
        image.invert()
      }
      if (args[0] === "blur") {
        image.blur(5)
      }
      if (args[0] === "blur2") {
        image.gaussian(2)
      }
      if (args[0] === "posterize") {
        image.posterize(5)
      }
      if (args[0] === "sepia") {
        image.sepia()
      }
      if (args[0] === "pixelate") {
        image.pixelate(9)
      }
      message.channel.send("👌 Imaginea se proceseaza...")
      image.write("imagini/imagine_cu_efect.png");
      var imagine = new Discord.Attachment("imagini/imagine_cu_efect.png");
      setTimeout(function(){
      message.channel.send(imagine)
    }, 1000);
  });
  });
}
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`img`],
  permLevel: 0
};

exports.help = {
  name: 'image',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

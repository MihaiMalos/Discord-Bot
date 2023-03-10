exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    var jimp = require("jimp")
    if (!user) {
    jimp.read("./imagini/trigger/triggered.png", function (err, image) {

       image.quality(100)
       jimp.read(message.author.avatarURL, function (err, img) {
           img.resize(256, 256)
           jimp.read("./imagini/trigger/trigger1.png", function (err, imj) {
            image.composite(img, 0, 0)
            image.composite(imj, 0, 206)
           .write("./imagini/trigger/" + message.author.id + ".jpg") 
           message.channel.send({file:"./imagini/trigger/" + message.author.id + ".jpg"})
       })
      })

  })
}


  if (user) {
    jimp.read("./imagini/trigger/triggered.png", function (err, image) {

      image.quality(100)
      jimp.read(user.avatarURL, function (err, img) {
          img.resize(256, 256)
          jimp.read("./imagini/trigger/trigger1.png", function (err, imj) {
      image.composite(img, 0, 0)
      image.composite(imj, 0, 206)
          .write("./imagini/trigger/" + message.author.id + ".jpg") 
          message.channel.send({file:"./imagini/trigger/" + message.author.id + ".jpg"})
      })
     })

 })
  }

}

exports.conf = {
  enabled: true,
  aliases: [`triggered`],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'trigger',
  description: 'Fa botul sa spuna ceva.',
  usage: 'say [mesaj]'
};

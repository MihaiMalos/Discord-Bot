exports.run = async (client, message, args) => {
var skin = "https://visage.surgeplay.com/full/512/" + args
if (args[0]) {
  message.channel.send({embed: {
    title: "__" + args + "__'s Minecraft Skin",
    url: 'https://www.youtube.com/channel/UCqj59rUP2weI3At1EJmwaZQ?',
    "image": {
      "url": skin
    }
  }});
} else {
  message.channel.send("Ai uitat sa specifici numele jucatorului!");
  }
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mcskin',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

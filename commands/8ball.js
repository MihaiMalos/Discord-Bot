exports.run = async (client, message, args) => {
  const prefix = "-"
  var argss = message.content.substring(prefix.length).split(" ");
  if (argss[1]) {
      message.reply(fortunes[Math.floor(Math.random() * fortunes.length)]);
  } else {
  message.channel.send("Nu pot citi asta!");
  }
}

var  fortunes = [
  "da",
  "nu",
  "posibil",
  "cine stie"
]

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Avertizeaza un membru.',
  usage: '8ball [mention] [motiv]'
};

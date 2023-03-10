exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  var prefix = "-"
  const embed = new Discord.RichEmbed()
  if (message.content.startsWith(prefix + 'avatar')) {
    if (message.content === prefix + 'avatar') {
    message.channel.send({
        "embed": {
                title: message.author.username + "'s Avatar",
                url: 'https://www.youtube.com/channel/UCqj59rUP2weI3At1EJmwaZQ?',
                "image": {
                "url": message.author.avatarURL,
                }
            }
        });
} else {
  if (message.mentions.users.size === 0) {
          return message.channel.send(":x: Trebuie sa dai mention.")
  }
  var mentionedUser = message.mentions.users.first()
  message.channel.send({
    "embed": {
            title: mentionedUser.username + "'s Avatar",
            url: 'https://www.youtube.com/channel/UCqj59rUP2weI3At1EJmwaZQ?',
            "image": {
            "url": mentionedUser.avatarURL,
            }
        }
    });
  }
}
}

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Fa botul sa spuna ceva.',
  usage: 'say [mesaj]'
};


const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    description: "[__**Click sa ma inviti!**__](https://mmbot.cf/invite)",
    timestamp: new Date()
  }});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

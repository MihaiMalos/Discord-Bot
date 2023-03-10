exports.run = (client, message, member) => {
  var math = require("mathjs")
var membrii = client.guilds.map(g => g.memberCount).join("+")
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    fields: [{
      name: "Versiune",
      value: "1.1",
      inline: true
    },
    {
      name: "Creator",
      value: "MihaiMalos#9957",
      inline: true
    },
    {
      name: "Membrii",
      value: math.eval(membrii),
      inline: true
    },
    {
      name: "Guild-uri",
      value: client.guilds.size,
      inline: true
    },
    {
      name: "Website",
      value: "[mmbot.cf](https://mmbot.cf)",
      inline: true
    },
    {
      name: "Invite",
      value: "[Invite](https://mmbot.cf/invite)",
      inline: true
    },
  
  ],
  }});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: 'Vezi pe cate servere sunt',
  usage: 'server'
};

exports.run = async (client, message, args) => {
  const ping = require('mc-hermes');
  if (args.length < 1) return message.channel.send("Ai uitat sa specifici server-ul!")
  if (args[0]) {
  ping.pc({ server: args.join(" ") })
  .then((data)=>{
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      description: "• Playeri online: \n» **" + data.players.online + "**/**" + data.players.max + "**\n\n• Versiune: \n» **" + data.version.name + "**\n\n• Dns: \n» **" + args.join(" ") + "**"    
    }
    });
  });
}
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`mcserver`, `mcping`],
  permLevel: 0
};

exports.help = {
  name: 'mcinfo',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

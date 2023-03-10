exports.run = async (client, message, args) => {
  var prefix = "-"
    if(args.length < 1) return message.channel.send("Ai uitat sa pui textul");
    message.delete()
    message.channel.send({embed: {
        color: 3447003,
        author: {
            name: message.author.username,
            icon_url: message.author.avatarURL
          },
        description: `${args.join(" ")}`    
        }
    })
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'embed',
  description: 'Avertizeaza un membru.',
  usage: '8ball [mention] [motiv]'
};

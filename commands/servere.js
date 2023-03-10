exports.run = (client, message, member) => {
    message.channel.send({
        embed: {
                color: 0x00AE86
                , title: 'Serverele pe care sunt eu!'
                , description: ("```" + client.guilds.map(r => r.name + ` (${r.memberCount})`).join("\n") + "```")
        }
    });
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'servere',
    description: 'Vezi pe cate servere sunt',
    usage: 'server'
  };
  
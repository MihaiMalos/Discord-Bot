exports.run = (client, message, member) => {
    const servere = client.guilds.map(g => g.id).join(" ").split(" ")
    for(var i=0;i< client.guilds.size;i++){
    var test = client.guilds.get(servere[i])
    const dchannel = test.channels.map(c => c.id).join(" ").split(" "); 
    var channelid = dchannel[0]
    test.channels.get(channelid).createInvite().then(invite =>
      message.channel.send(invite.url)
  );}
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
  };
  
  exports.help = {
    name: 'secret',
    description: 'Vezi pe cate servere sunt',
    usage: 'server'
  };
  
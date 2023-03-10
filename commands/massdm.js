exports.run = (client, message, member) => {
    
  var prefix = "-"
  let args = message.content.split(" ").slice(1)
  if(message.author.id === "238718268049719296") {
    if (message.content.startsWith(prefix + "massdm")) {
      message.guild.members.forEach(member => {
                  member.send(`${args.join(" ")}`)
          })}
        }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'massdm',
  description: 'Vezi pe cate servere sunt',
  usage: 'server'
};

exports.run = async (client, message, args) => {
  let nume = message.guild.name
  const Discord = require("discord.js");
  var prefix = "-"
  let membrii = message.guild.memberCount
  let roles = message.guild.roles.size
  let emojis = message.guild.emojis.map(e=>e.toString()).join(" ")
  let icon = message.guild.iconURL
  let region = message.guild.region
  let guildid = message.guild.id
  let creat = message.guild.createdAt
  let owner = message.guild.owner
  let canale = message.guild.channels.size
  let bots = message.guild.members.filter(m => m.user.bot).size
  let humans = membrii - bots
  let on = message.guild.members.filter(m => m.presence.status !== 'offline').size
  var serverinfo = new Discord.RichEmbed()
      .setThumbnail(icon)
      .setColor("RANDOM")
      .setAuthor(nume, icon)
      .addField("ID", guildid, true) 
      .addField("Name", nume, true)
      .addField("Owner", owner, true)
      .addField("Region", region, true)
      .addField("Channels", canale, true)
      .addField("Members", membrii, true)
      .addField("Humans", humans, true)
      .addField("Bots", bots, true)
      .addField("Online", on, true)
      .addField("Roles", roles, true)
      .setFooter("Server Created | " + creat)
      message.channel.send(serverinfo);
}

exports.conf = {
  enabled: true,
  aliases: ['sinfo'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Fa botul sa spuna ceva.',
  usage: 'say [mesaj]'
};

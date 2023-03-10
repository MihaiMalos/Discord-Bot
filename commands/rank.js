exports.run = (client, message, args) => {
const Discord = require('discord.js');
let user = message.mentions.users.first();
var aut = message.guild.member(message.author.id).roles.map(g => g.name)
if (message.mentions.users.size < 1) return message.channel.send({embed: {
    color: 3447003,
    title: `Role-urile lui __${message.author.username}__`,
    description: "`" + aut.slice(1).join(", ") + "`"
  }});
var us = message.guild.member(user.id).roles.map(g => g.name)
if (user) return message.channel.send({embed: {
    color: 3447003,
    title: `Role-urile lui __${user.username}__`,
    description: "`" + us.slice(1).join(", ") + "`"
  }});

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ranks', 'role'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'rank',
    description: 'Baneaza un membru.',
    usage: 'ban [mention] [mtoiv]'
  };
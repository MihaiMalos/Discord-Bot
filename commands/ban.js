const Discord = require('discord.js');
exports.run = (client, message, args) => {
  prefix = "-"
let user = message.mentions.users.first();
if(!message.member.hasPermission('BAN_MEMBERS') && (message.author.id !== "263748030191108097")) return message.channel.send("🔥 Nu ai permisiunea!")
if (message.mentions.users.size < 1) return message.channel.send("🔥 Ai uitat sa dai mention persoanei respective!")
if(user.id === client.user.id) return message.channel.send("Nu ma pot bana :c ")
if (user.id === message.author.id) return message.channel.send("🔥 Nu te poti bana singur!");
if(!message.guild.member(user).bannable) return message.channel.send("🔥 Nu pot bana acest user!");

message.channel.send("Te rog sa specifici motivul! Ai 20 de secunde la dispozitie")
.then(() => {

message.channel.awaitMessages(response => response.author.id === message.author.id, {
max: 1,
time: 20000,
errors: ['time'],
})

.then((collected) => {
user.send("Ai fost banat de pe server-ul `" + message.guild.name + "`!\nBanat pentru: " + collected.first().content)
message.channel.send(`👌 Banat`);
message.guild.ban(user.id)
})

.catch(() => {
message.channel.send('Timpul a expirat. Nu ai pus un motiv!');
});
});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ben'],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'Baneaza un membru.',
  usage: 'ban [mention] [mtoiv]'
};

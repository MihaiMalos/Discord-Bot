const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const reason = args.slice(1).join(' ');
  const user = message.mentions.users.first();
  if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("🔥 Nu ai acces la aceasta comanda!")
  if (message.mentions.users.size < 1) return message.channel.send("🔥 Ai uitat sa dai mention persoanei respective!")
  if(user.id === client.user.id) return message.channel.send("Nu ma pot da afara :c ")
  if (user.id === message.author.id) return message.channel.send("🔥 Nu te poti bana singur!");
  if (!message.guild.member(user).kickable) return message.channel.send('Nu pot da kick acestui membru');

  message.channel.send("Te rog sa specifici motivul! Ai 20 se secunde la dispozitie")
.then(() => {

  message.channel.awaitMessages(response => response.author.id === message.author.id, {
    max: 1,
    time: 20000,
    errors: ['time'],
    })
    .then((collected) => {
      user.send("Ai fost dat afara de pe server-ul `" + message.guild.name + "`!\nDat afara pentru: " + collected.first().content)
      message.channel.send(`👌 Dat afara`);
      message.guild.member(user).kick();
      })
      .catch(() => {
        message.channel.send('Timpul a expirat. Nu ai pus un motiv!');
        });
        });

};

exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'Da kick unui membru.',
  usage: 'kick [mention] [motiv]'
};

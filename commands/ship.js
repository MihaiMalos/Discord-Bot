exports.run = async (client, message, args) => {
  const prefix = "-"
  let mentionedUser = message.mentions.users.first();
  const args1 =  message.content.substring(prefix.length).split("");
  const args2 =  message.content.substring(prefix.length).split(" ");
  var randomInt = require('random-int');;
  if (!mentionedUser && !args[1]) return message.channel.send("Utilizarea corecta este:\n-ship [mention]\n-ship [persoana1] [persoana2]")
  if (mentionedUser) {
    message.channel.send(":heartpulse: **MATCHMAKING** :heartpulse:\n:small_red_triangle_down: _`" + message.author.username + "`_" + "\n:small_red_triangle: _`" + mentionedUser.username + "`_\n" + ":arrow_forward: `" + randomInt(0, 100) + "%`")
  } 
  if (args[1]) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    message.channel.send(":heartpulse: **MATCHMAKING** :heartpulse:\n:small_red_triangle_down: _`" + args[0] + "`_" + "\n:small_red_triangle: _`" + args[1] + "`_\n" + ":arrow_forward: `" + randomInt(0, 100) + "%`")
}
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ship',
  description: 'Avertizeaza un membru.',
  usage: '8ball [mention] [motiv]'
};

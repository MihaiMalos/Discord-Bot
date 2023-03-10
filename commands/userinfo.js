exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  prefix = "-"
  const embed = new Discord.RichEmbed()
  if (message.content.startsWith(prefix + 'userinfo')) {
    if (message.content === prefix + 'userinfo') {
            var game = "game"
            if (!message.author.presence.game) {
                    game = "Nothing"
            } else {
                    game = message.author.presence.game.name
            }
            embed
                    .setColor("RANDOM")
                    .setTitle('Informatii despre utilizator.')
                    .setFooter(`Creat pe ${message.author.createdAt}`, message.author.avatarURL)
                    .setThumbnail(message.author.avatarURL)
                    .addField('ID', message.author.id, true)
                    .addField('Nume', message.author.username, true)
                    .addField('Jucand', game, true)
                    .addField('Tag', `#` + message.author.discriminator, true)
                    .addField('Bot', message.author.bot, true)
            message.channel.send({
                    embed
            });
    } else {
            if (message.mentions.users.size === 0) {
                    return message.channel.send(":x: Trebuie sa dai mention.")
            }
            let mentionedUser = message.mentions.users.first()
            var game = "game"
            if (!mentionedUser.presence.game) {
                    game = "Nothing"
            } else {
                    game = mentionedUser.presence.game.name
            }
            embed
                    .setColor("RANDOM")
                    .setTitle('Informatii despre utilizator.')
                    .setFooter(`Creat pe ${mentionedUser.createdAt}`, mentionedUser.avatarURL)
                    .setThumbnail(mentionedUser.avatarURL)
                    .addField('ID', mentionedUser.id, true)
                    .addField('Nume', mentionedUser.username, true)
                    .addField('Jucand', game, true)
                    .addField('Tag', `#` + mentionedUser.discriminator, true)
                    .addField('Bot', mentionedUser.bot, true)
            message.channel.send({
                    embed
            });
    }
}
}

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Fa botul sa spuna ceva.',
  usage: 'say [mesaj]'
};

const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  var sys = require('util')
  var exec = require('child_process').exec;
  if (args.length < 1) return message.channel.send("Ai uitat de argument!")
  function puts(error, stdout, stderr) {
    if (stdout.length < 1) return message.channel.send("Rezultatul este null")
    message.channel.send("```" + stdout + "```")
}
  exec(args.join(" "), puts);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`command`, `cmd`],
  permLevel: 2
};

exports.help = {
  name: 'comanda',
  description: 'Calculeaza ping-ul',
  usage: 'pm2'
};

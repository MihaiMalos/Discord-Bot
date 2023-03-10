const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  var sys = require('util')
  var exec = require('child_process').exec;
  if (args.length < 1) return message.channel.send("Ai uitat sa introduci host-ul!")
  function puts(error, stdout, stderr) { message.channel.send({embed: {
    color: 3447003,
    title: "REZULTAT PING",
    description: (stdout),
    timestamp: new Date()
  }});
}
  exec("ping -c 4 " + args, puts);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Calculeaza ping-ul',
  usage: 'ping'
};

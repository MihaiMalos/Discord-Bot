
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  var ping = require('ping');
if (args.length < 1) return message.channel.send("Ai uitat sa specifici host-ul!")
 var hosts = [args];
 hosts.forEach(function(host){
     ping.sys.probe(host, function(isAlive){
         var msg = isAlive ? 'Host-ul ' + host + ' __**merge**__' : 'Host-ul ' + host + ' e __**picat**__';
         message.channel.send(msg);
     });
  });
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'check',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

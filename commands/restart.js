const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  var figlet = require('figlet');
  var sys = require('util')
  var exec = require('child_process').exec;
  function puts(error, stdout, stderr) { message.channel.send("Executat!") }
  figlet("- - - - - - - RESTART - - - - - - -", function(err, data) {
  console.log(data)
  message.channel.send("Am primit restart corespunzator!")
});
  exec("pm2 restart mmbot.js", puts);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`rr`],
  permLevel: 2
};

exports.help = {
  name: 'restart',
  description: 'Calculeaza ping-ul',
  usage: 'pm2'
};

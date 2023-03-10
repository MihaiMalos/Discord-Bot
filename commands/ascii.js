exports.run = async (client, message, args) => {
  var figlet = require('figlet');
  
 figlet(args.join(" "), function(err, data) {
     if (err) {
         console.log('A aparut o eroare:');
         console.dir(err);
         return;
     }
     if (args[0]) {
     message.channel.send("```" + data + "```")
     }
     if (!args[0]) {
      message.channel.send("Ai uitat de text!")
      }
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ascii',
  description: 'Avertizeaza un membru.',
  usage: '8ball [mention] [motiv]'
};

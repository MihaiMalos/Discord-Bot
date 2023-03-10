const settings = require('../settings.json');
const prefix = "-"
exports.run = (client, message, params) => {
  if(message.channel.type === "dm") return;
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`= Command List =\n\n[Foloseste ${settings.prefix}help <comanda> pentru mai multe informatii]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nUtilizare: -${command.help.usage}`, {code:'asciidoc'});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Arata toate comenzile bot-ului.',
  usage: 'help [comanda]'
};

const Discord = require("discord.js");
var client = new Discord.Client();
exports.run = (client, message, params) => {
message.channel.send("Prefixul este `-`\nPoti gasi lista de comenzi la https://mmbot.cf/#comenzi")
message.channel.send({embed: {
  color: 3447003,
  title: "Link-uri aditionale",
  description: "[**Pagina Mea**](https://mmbot.cf)\n[**Invita bot-ul**](https://mmbot.cf/#comenzi)\n[**Credite**](https://mmbot.cf/#team)\n[**Facilitati**](https://mmbot.cf/#facilitati)"
}
});

}

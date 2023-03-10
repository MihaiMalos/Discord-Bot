exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`Nu pot gasi aceasta comanda: ${args[0]}`);
  } else {
    message.channel.send(`Reloading: ${command}`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`Comanda: ${command} a fost reincarcata cu succes`);
          })
          .catch(e => {
            m.edit(`Comanda: ${command}\n\`\`\`${e.stack}\`\`\` a esuat reincarcarea`);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Da reload unei comenzi.',
  usage: 'reload <comanda>'
};

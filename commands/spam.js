exports.run = (client, message, member) => {
var prefix = "-spam"
var args = message.content.slice(prefix.length).trim().split(/ +/g);
const canal = client.channels.get(args[0])
  if (args[1]) {
    canal.send(args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" +args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" "))
    canal.send(args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" +args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" "))
    canal.send(args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" +args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" "))
    canal.send(args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + "\n" +args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" ") + args.slice(1).join(" "))

  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'spam',
  description: 'Vezi pe cate servere sunt',
  usage: 'server'
};

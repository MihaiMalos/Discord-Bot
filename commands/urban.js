exports.run = async (client, message, args) => {


const ud = require('urban-dictionary')
const arg = message.content.slice(6).trim().split(/ +/g);
var definition = arg

ud.term(definition, function (error, entries, tags, sounds) {
  if (error) {
    console.error(error.message)
  } else {
    message.channel.send({embed: {
      color: 3447003,
      description: "Cuvant: **" + (entries[0].word) + "**",
      url: "https://www.youtube.com/channel/UCqj59rUP2weI3At1EJmwaZQ?",
      fields: [{
          name: "Definitie",
          value: (entries[0].definition)
        },
        {
          name: "Exemple",
          value: entries[0].example
        }
      ],
    }
  });
  }
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['urbandictionary', 'ud'],
  permLevel: 0
};

exports.help = {
  name: 'urban',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

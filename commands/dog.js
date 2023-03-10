exports.run = (client, message, member) => {
    const random = require("random-animal");
    random.dog().then(url => message.channel.send({"embed": {title: 'Cutuuuuu',url: 'https://www.youtube.com/channel/UCqj59rUP2weI3At1EJmwaZQ?',"image": {"url": url,}}})).catch(err => console.log(err.message));
}
    
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };
    
    exports.help = {
      name: 'dog',
      description: 'Vezi pe cate servere sunt',
      usage: 'server'
    };
    
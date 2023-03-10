var insult = [
  "https://i.imgur.com/t9ObPCB.gif",
  "https://thumbs.gfycat.com/ImperfectAnyAmberpenshell-max-1mb.gif",
  "http://mrwgifs.com/wp-content/uploads/2013/06/Steve-Carrel-Clothes-Insult-Gif-In-Anchorman.gif",
  "https://media.giphy.com/media/yjvUtGGCX4Swo/giphy.gif",
  "http://33.media.tumblr.com/66114b08e237dffad5c4888f0cffd713/tumblr_np8b77YiHn1ql5yr7o1_500.gif",
  "https://thumbs.gfycat.com/BareVacantHeron-size_restricted.gif",
  "http://i.imgur.com/8sqhwOg.gif",
  "https://media.giphy.com/media/5WQLL2U55z49G/giphy.gif",
  "http://mrwgifs.com/wp-content/uploads/2013/09/Angry-Kristen-Wiig-Insult-Gif-In-Bridesmaids.gif",
  "https://i.imgur.com/dUb0C1V.gif",
  "http://www.sharegif.com/wp-content/uploads/2014/03/burninsultworstpaul-giam.gif",
  "https://media.giphy.com/media/3o6Ztbh0jSWVTIy080/giphy.gif",
  "https://media.giphy.com/media/6sLZT00q3qlTW/giphy.gif",
  "https://media.giphy.com/media/12Ay7LCGoqt6zS/giphy.gif",
  "https://m.popkey.co/5dab56/y6y87.gif",
  "https://i.imgur.com/ruaiP5Y.gif",
  "https://media.giphy.com/media/sdTdWiYjQe5z2/giphy.gif",
  "https://media1.tenor.com/images/040aaa02185317fb9eaac692202e38c8/tenor.gif?itemid=5044830",
  "https://s-media-cache-ak0.pinimg.com/originals/f1/18/ab/f118ab95e45982d358e022ee1bc5caeb.gif",
  "http://media4.giphy.com/media/26BGQhPJAjWA7VVNm/giphy.gif",
  "http://img18.laughinggif.com/pic/HTTPS9tZWRpYS50ZW5vci5jby9pbWFnZXMvMGUyMjQ0OTA3YTQxMjRlNWI3ZDgyNDM2ODUyYjA1NmUvcmF3.gif",
  "https://im-01.gifer.com/xka.gif",
  "https://31.media.tumblr.com/2c376ad971582e5c0190523829fa4a14/tumblr_inline_nimxfa4nJ01qa3d25.gif",
  "https://i.imgur.com/kKh6EMI.gif",
  "http://img20.laughinggif.com/pic/HTTP3d3dy5ndXJsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxMy8wNi9vcmlnaW5hbDE1LmdpZgloglog.gif",
  "https://lilacbrickroad.files.wordpress.com/2013/02/tumblr_mhu2ovq7yu1rr3l61o1_500.gif",
  "http://assets.bwbx.io/images/iCw9AiodA_js/v1/-999x-999.gif",
  "http://mrwgifs.com/wp-content/uploads/2014/01/Youre-Cute-Did-You-Come-From-Work-Insult-Gif-In-Bridesmaids.gif",
  "https://im-01.gifer.com/2JY6.gif",
  "https://78.media.tumblr.com/a8bb00cea2c79a82ed14fbbee416119c/tumblr_p40q0ds61n1tkb2p0o2_r1_500.gif",
];
exports.run = async (client, message, args) => {
  var args3 = message.content.substring(prefix.length).split("");
  let mentionedUser = message.mentions.users.first()
  if (args.length < 1) {
    message.channel.send({
      "embed": {
              title: message.author.username + " s-a insultat singur",
              url: 'https://www.youtube.com/channel/UCqj59rUP2weI3At1EJmwaZQ?',
              "image": {
              "url": (insult[Math.floor(Math.random() * insult.length)]),
              }
          }
      });
  }
  if (mentionedUser) {
    message.channel.send({
      "embed": {
              title: message.author.username + " l-a insultat pe " + mentionedUser.username,
              url: 'https://www.youtube.com/channel/UCqj59rUP2weI3At1EJmwaZQ?',
              "image": {
              "url": (insult[Math.floor(Math.random() * insult.length)]),
              }
          }
      });
  }
};

var prefix = "-"
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['insulta'],
  permLevel: 0
};

exports.help = {
  name: 'insult',
  description: 'Avertizeaza un membru.',
  usage: 'warn [mention] [motiv]'
};

exports.run = async (client, message, args) => {
  const vot = "🎉"
  var ms = require("ms")
  var countdown = require("countdown")
  if(!message.member.hasPermission('MANAGE_GUILD') && (message.author.id !== "263748030191108097")) return message.channel.send("🔥 Nu ai permisiunea `MANAGE_GUILD`!")
  var args = message.content.substring().split(" ")
  var premiu = args.slice(4).join(' ');
  if (!args[1]) return message.channel.send("Utilizare corecta: -giveaway [canal] [durata] [masura] [premiu]");
  if (!premiu) return message.channel.send("Utilizare corecta: -giveaway [canal] [durata] [masura] [premiu]");
  if (args[3] !== "s" && args[3] !== "m" && args[3] !== "h" && args[3] !== "d" && args[3] !== "y") return message.channel.send("Masuri valabile: s(secunda), m(minut), h(ora), d(zi), y (an)")
    let canal = client.channels.find("name", args[1])
    let msg = await canal.send(vot + " **GIVEAWAY** " + vot)
    var pcooldown = ms(args[2] + args[3])
    var pdata1 = new Date()
    var pdurata1 = pdata1.getTime()
    var pdurata2 = pdurata1 + pcooldown
    var pdata2 = new Date(pdurata2)
    var poutput = countdown(pdata1, pdata2 ,countdown.HOURS|countdown.MINUTES|countdown.SECONDS).toString()
    let msg2 = await canal.send({embed: {
      color: 3447003,
      title: premiu,
      description: "Reactioneaza cu " + vot + " pentru a intra!\nGiveaway-ul se termina in **" + poutput + "**",
      timestamp: new Date(),
    }})
    var cooldown = ms(args[2] + args[3])
      function edit(){
        setTimeout(function () {
        cooldown-=30000
         var data1 = new Date()
        var durata1 = data1.getTime()
        var durata2 = durata1 + cooldown
        var data2 = new Date(durata2)
        var output = countdown(data1, data2 ,countdown.HOURS|countdown.MINUTES|countdown.SECONDS).toString()
        msg2.edit({embed: {
          color: 3447003,
          title: premiu,
          description: "Reactioneaza cu " + vot + " pentru a intra!\nGiveaway-ul se termina in **" + output + "**",
          timestamp: new Date(),
        }})
        if(cooldown>0){
          edit();
        }
      }, 30000)}
    edit();
    await msg2.react(vot)
    const emoji = await msg2.awaitReactions(r => r.emoji.name === "🎉", {time: ms(args[2] + args[3])});
    var participanti = (emoji.get(vot).users.map(b => "<@" + b.id + ">")).slice(1)
    var castigator = (participanti[Math.floor(Math.random() * participanti.length)])
    if (!castigator) return canal.send("Din pacate, nu a participat nimeni la acest giveaway!")
    if (participanti === undefined) return canal.send("Din pacate, nu a participat nimeni la acest giveaway!")
    if (castigator === undefined) return canal.send("Din pacate, nu a participat nimeni la acest giveaway!")
    canal.send(`Felicitari ` + castigator + `, pentru castigarea premiului **${premiu}**` )
    msg2.edit({embed: {
      color: 3447003,
      title: premiu,
      description: "**Giveaway-ul s-a terminat!**\n\nCastigatorul acestui giveaway este **" + castigator + "**\n\n**Felicitari!**",
      timestamp: new Date(),
    }})
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'giveaway',
  description: 'Avertizeaza un membru.',
  usage: '8ball [mention] [motiv]'
};

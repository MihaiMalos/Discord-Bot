const talkedRecently = new Set();
exports.run = (client, message, prefix) => {
  if (message.content.startsWith("-battle")) {

    if (talkedRecently.has(message.author.id))
    return message.channel.send("Comanda de battle are un cooldown de 20 de secunde!")
  
    message.guild.members.forEach(member => {
      talkedRecently.add(member.id);
        })
  
    setTimeout(() => {
      message.guild.members.forEach(member => {
        talkedRecently.delete(member.id);
          })
    }, 20000);
  }
    
    if (message.content.startsWith("-battle")) {
  
      var s1 = "🔹"
      var s2 = "🏆"
      var s3 = "🛑"
      var randomInt = require('random-int');
      var iteme = [
        "topor",
        "tarnacop",
        "carnat",
        "pateu bucegi",
        "pistol",
        "cadou",
        "televizor",
        "telefon",
        "zid",
        "termometru",
        "prezervativ",
        "monitor",
        "cutit",
        "copac",
      ];
      let user = message.mentions.users.first();
      if (!user) return message.channel.send("Ai uitat de mention!")
      var hp = 100 
      var hp2 = 100
      var jimp = require("jimp")
      jimp.read("./imagini/battle.png", function (err, image) {
        message.channel.startTyping();
         image.quality(100)
         jimp.loadFont("./node_modules/jimp/fonts/open-sans/open-sans-32-black/open-sans-32-black.fnt").then(function (font) {     
         jimp.read(message.author.avatarURL, function (err, img) {
             img.resize(250, 270)  
         jimp.read(user.avatarURL, function (err2, img2) {
              img2.resize(250, 270)
         image.print(font, 47, 402, message.author.username)
         image.print(font, 398, 402, user.username) 
         image.composite(img, 13, 133)
         image.composite(img2, 358, 133)
             .write("./imagini/battle/" + message.author.id + ".jpg") 
          message.channel.send({file:"./imagini/battle/" + message.author.id + ".jpg"})
         })
            
         })
        })
     })
     setTimeout(async function() {
  
     var m = await message.channel.send({embed: {
      color: 3447003,
      description: `${s1} Batalia intre **${message.author.username}** si **${user.username}** se va desfasura imediat!`,
      fields: [{
        name: message.author.username,
        value: hp + "/100",
        inline: true
      },
      {
        name: user.username,
        value: hp2 + "/100",
        inline: true
    }]
    }    
    })
    message.channel.stopTyping()
  
  
      a = setInterval(function(){ 
        hp -= randomInt(8, 19);
        hp2 -= randomInt(8, 19)
  
  
  m.edit({embed: {
    color: 3447003,
    description: `${s1} Batalia intre **${message.author.username}** si **${user.username}** este in curs de desfasurare\n${s1} **${message.author.username}** i-a dat lui **${user.username}** cu un _${(iteme[Math.floor(Math.random() * iteme.length)])}_  **${100 - hp2} damage** \n${s1} **${user.username}** i-a dat lui **${message.author.username}** cu un _${(iteme[Math.floor(Math.random() * iteme.length)])}_  **${100 - hp} damage** `,
    fields: [{
      name: message.author.username,
      value: hp + "/100",
      inline: true
    },
    {
      name: user.username,
      value: hp2 + "/100",
      inline: true
  }]
  }    
  })
  
  if (hp2 < 1 && hp < 1) {
    m.edit({embed: {
      color: 3447003,
      description: `${s3} A avut loc o egalitate intre **${message.author.username}** si **${user.username}**`,
      fields: [{
        name: message.author.username,
        value: 0 + "/100",
        inline: true
      },
      {
        name: user.username,
        value: 0 + "/100",
        inline: true
    }]
    }    
    })
    clearInterval(a);
    return;
   }
  
  
      if(hp < 1) {
        m.edit({embed: {
          color: 3447003,
          description: `${s2} Castigatorul este __**${user.username}**__`,
          fields: [{
            name: message.author.username,
            value: 0 + "/100",
            inline: true
          },
          {
            name: user.username,
            value: hp2 + "/100",
            inline: true
        }]
        }    
        })
        clearInterval(a);
        return;
     };
     if(hp2 < 1) {
      m.edit({embed: {
        color: 3447003,
        description: `${s2} Castigatorul este __**${message.author.username}**__`,
        fields: [{
          name: message.author.username,
          value: hp + "/100",
          inline: true
        },
        {
          name: user.username,
          value: 0 + "/100",
          inline: true
      }]
      }    
      })
      clearInterval(a);
      return;
   }
   
  }, 1500);
  }, 7500)
  
        }
    }

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['deathbattle'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'battle',
        description: 'Schimba jocul bot-ului',
        usage: 'game'
      };
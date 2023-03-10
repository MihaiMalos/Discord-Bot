const Discord = require('discord.js');
const talkedRecently = new Set();
const client = new Discord.Client({autoReconnect:true});
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
var ms = require("ms")
const reqEvent = (event) => require(`./events/${event}`);
  client.on('ready', () => reqEvent('ready')(client));
  client.on('reconnecting', () => reqEvent('reconnecting')(client));
  client.on('disconnect', () => reqEvent('disconnect')(client));
  client.on('message', reqEvent('message'));
  client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
  client.on('guildMemberRemove', reqEvent('guildMemberRemove'));
  client.on('guildBanAdd', reqEvent('guildBanAdd'));
  client.on('guildBanRemove', reqEvent('guildBanRemove'));
var token = "YOUR_TOKEN"
var colors = require('colors');
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`S-au incarcat` + ` ${files.length}`.red + ` de comenzi.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Comanda: ` + `${props.help.name}`.bold.red + ` incarcat ` + `😎`.yellow);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

client.on('ready', () => {
var math = require("mathjs")
var membrii = client.guilds.map(g => g.memberCount).join("+")
const status = [
  math.eval(membrii) + " users",
  "mmbot.cf",
  "Hi",
  "Independent",
  "Type -help",
  client.guilds.size + " guilds"
  ]

   setInterval(() => {
  client.user.setActivity(status[Math.floor(Math.random() * status.length)])
    }, ms("7s"));
});

client.on("guildCreate", guild => {
  const canal = client.channels.get("417317635638951938")
  var math = require("mathjs")
var membrii = client.guilds.map(g => g.memberCount).join("+")
  canal.send({embed: {
    color: 3447003,
    title: guild.name + " `(intrare)`",
    description: "**ID:** `" + guild.id +  "`\n**Numar Membrii:** `" + guild.memberCount + "`\n**Owner:** `" + guild.owner.user.username + "`" + "\n**Guild-uri totale:** `" + client.guilds.size + "`" + "\n**Membrii totali:** `" + math.eval(membrii)  + "`"
  }});
});


client.on("guildDelete", guild => {
  const canal = client.channels.get("417317635638951938")
  var math = require("mathjs")
var membrii = client.guilds.map(g => g.memberCount).join("+")
  canal.send({embed: {
    color: 3447003,
    title: guild.name + " `(iesire)`",
    description: "**ID:** `" + guild.id +  "`\n**Numar Membrii:** `" + guild.memberCount + "`\n**Owner:** `" + guild.owner.user.username + "`" + "\n**Guild-uri totale:** `" + client.guilds.size + "`" + "\n**Membrii totali:** `" + math.eval(membrii)  + "`"
  }});
});

client.elevation = message => {



  let permlvl = 0;
  let mod_role = message.guild.roles.find('name', settings.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = message.guild.roles.find('name', settings.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === settings.ownerid) permlvl = 4;
  return permlvl;
};


  client.on('message', message => 
{

const args = message.content.substring().split(" ");
 

var mihai = "238718268049719296"
var lis = "263748030191108097"
var king = "240874845695377420"


const canal = client.channels.get("433896239277277184")
    if (message.author.id === lis)  { 
      message.react("😼")
    }
    if (message.author.id === king) return message.react("😏")
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
    switch (args[0].toLowerCase())
    {
      case "wcro":
      var figlet = require('figlet');
      figlet(".i. Muie Gamster .i.", function(err, data) {
        if (err) {
            console.log('A aparut o eroare:');
            console.dir(err);
            return;
        }
      message.channel.send("```" + data + "```")
    });
      break;
      case "wc-ro":
      figlet(".i. Muie Gamster .i.", function(err, data) {
        if (err) {
            console.log('A aparut o eroare:');
            console.dir(err);
            return;
        }
      message.channel.send("```" + data + "```")
    });
      break;
      case "neata":
      message.react("☀")
      break;
     case "neatza":
     message.react("☀")
     break;
     case "neața":
     message.react("☀")
     case "hi":
     message.react("👌")
     break;
     case "salut":
     message.react("👌")
     break;
     case "logico":
     message.channel.send("```js\nLogico !== 'helper'```")
     break;
  }
  });




const Music = require('discord.js-musicbot-addon');
 
Music.start(client, {
  prefix: "-",
  maxQueueSize: "100",
  disableLoop: false,
  leaveHelp: "Nimic",
  leaveAlt: ["leave","leev","un1c0rns"],
  helpCmd: 'ajksndkasndasjkdnasjkda',
  leaveCmd: 'stop',
  ownerOverMember: false,
  botOwner: '238718268049719296',
  youtubeKey: 'AIzaSyA1sskMMoXHhopPl4AQ4ocqKX9SQPF7LH0'
});


const prefix = "-";


client.login(token);

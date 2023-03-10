exports.run = async (client, message, args) => {
    let suffix = args.join(" ")
    if (!suffix) {
            return message.channel.send(":x: I need some code to run!")
    }
    console.log('it executed')
    try {
            message.channel.send("", {
                    embed: {
                            color: 0x00AE86
                            , title: 'Input:'
                            , description: "```js\n" + suffix + "```"
                    }
            });
            var evaled = eval(suffix);
            if (typeof evaled !== "string")
                    evaled = require("util")
                    .inspect(evaled);
            var finished = `\`\`\`js\n ${clean(evaled)}\`\`\``
            if (finished.includes("MzYzNjI1OTUzNzgxNjEyNTQ1.DNUKYA.oQz8zGla0Fyt247tUbyLxzA3l4I")) {
                    return message.channel.send("", {
                            embed: {
                                    color: 0x00AE86
                                    , title: 'No.'
                                    , description: `No token for you!`
                            }
                    });
            }
            message.channel.send("", {
                    embed: {
                            color: 0x00AE86
                            , title: 'Output:'
                            , description: finished
                    }
            });
            console.log(finished)
    } catch (err) {
            //message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            message.channel.send("", {
                    embed: {
                            color: 0x00AE86
                            , description: `\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``
                    }
            });
    };
  }
  
  function clean(text) {
    if (typeof (textnow) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203))
                    .replace(/@/g, "@" + String.fromCharCode(8203))
    else
            return text;
}

exports.conf = {
  enabled: true,
  aliases: ['eval'],
  guildOnly: false,
  permLevel: 2
};

exports.help = {
  name: 'calc',
  description: 'Fa botul sa spuna ceva.',
  usage: 'say [mesaj]'
};

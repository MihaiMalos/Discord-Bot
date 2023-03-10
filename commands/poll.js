
exports.run = async (client, message) => {
    var args = message.content.substring().split("!");
    var titlu = args[1]
    var optiuni = []
    for(var i = 2; args[i] != undefined; i++){
        optiuni.push(args[i])
    }
    if (args.length < 1) return message.channel.send("Utilizare corecta: -poll !<titlu> !<optiune1> !<optiune2> ![optiune3] ![optiune4] etc...\n<> = obligatoriu\n[] = optional\n\nExemplu: -poll !titlul este acesta !prima optiune !a 2-a optiune")
    if (!args[2]) return message.channel.send("Utilizare corecta: -poll !<titlu> !<optiune1> !<optiune2> ![optiune3] ![optiune4] etc...\n<> = obligatoriu\n[] = optional\n\nExemplu: -poll !titlul este acesta !prima optiune !a 2-a optiune")
    var Strawpoll = require("@mickaelftw/strawpolljs")
    let testCreatePoll = new Strawpoll(
    titlu,             
    optiuni,
    false,            
    Strawpoll.DUPCHECK_DISABLED,   
    false                       
    );

    testCreatePoll.createPoll()            
    .then((poll) => {                     
        message.channel.send("https://www.strawpoll.me/" + poll.id);             
    });

}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['strawpoll'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'poll',
    description: 'Avertizeaza un membru.',
    usage: '8ball [mention] [motiv]'
  };
exports.run = (client, message, args) => {
    var getgeoip = require('ip-geoinfo');
    var ipAddress = args.join(" ");
    const hostToIp = require('host-to-ip');
    const Discord = require('discord.js');
    if (args.length < 1) return message.channel.send("Ai uitat sa specifici host-ul!")
    hostToIp(ipAddress).then(ip => {
        getgeoip(ip).then(function (geoData) {
            var oras = geoData.city
            var regiune = geoData.region
            var tara = geoData.country
            var nume_tara = geoData.country_name
            var cod_postal = geoData.postal
            var latitudine = geoData.latitude
            var longitudine = geoData.longitude
            var timp = geoData.timezone
            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setThumbnail("http://www.ipfingerprints.com/images/menu/menu_left.png")
            .setColor(0x00AE86)
            .addField("Oras",oras, true )
            .addField("Regiune",regiune, true )
            .addField("Tara",tara, true )
            .addField("Numele Tarii",nume_tara, true )
            .addField("Cod Postal",cod_postal, true )
            .addField("Coordonate", latitudine + ", " + longitudine, true )
            .addField("Timp",timp, true )
            .setTimestamp()
            message.channel.send({embed});
        });
    });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ipwhois'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'whois',
    description: 'Baneaza un membru.',
    usage: 'ban [mention] [mtoiv]'
  };
  
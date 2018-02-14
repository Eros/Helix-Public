const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
     let serviceMesssage = new Discord.RichEmbed();
        serviceMesssage.setColor('#7200ff');
        serviceMesssage.setTitle('Current service stats');
        serviceMesssage.addField('Current uptime: ', 'TODO');
        serviceMesssage.addField('RAM Usage: ', `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`, true);
        serviceMesssage.addField('Websocket:', `${process.platform} (${process.arch})`, true);
        serviceMesssage.addField('Ping: ', `${bot.ping}`);
        serviceMesssage.addField('Channels: ', `${bot.channels}`);
        serviceMesssage.addField('Bot originally made on: ', bot.user.createdAt)
        message.channel.send(serviceMesssage);
}

module.exports.help = {
    name: "service"
}
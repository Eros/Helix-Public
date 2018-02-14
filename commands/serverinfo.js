const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
        let icon = message.guild.iconURL;
        let serverInfo = new Discord.RichEmbed()
        .setDescription('Server information')
        .setColor('#42dff4')
        .setThumbnail(icon)
        .addField('Server name: ', message.guild.name)
        .addField('Created on: ', message.guild.createdAt)
        .addField('You joined ( ' + message.member.displayName + ') at: ', message.member.joinedAt)
        .addField('Total members: ', message.guild.memberCount)
        .addField('All roles: ', message.guild.roles.array)
        .addField('Default role: ', message.guild.defaultRole);
        message.channel.send(serverInfo);
}

module.exports.help = {
    name: "serverinfo"
}
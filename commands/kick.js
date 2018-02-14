const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

        let kickedUser = message.guild.member(message.mentions.users.first
            || message.guild.members.get(args[0]));
        if(!kickedUser)
         return message.channel.send('Couldn\`t find user: ' + `${reportedUser}`);
        let kickReason = args.join(' ').slice(22);

        if(!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send('You do not have permission to use this command ' + `<@${message.author.id}>`);
        if(kickedUser.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send('That user cannot be kicked by you!'); 

        let kickedMessage = new Discord.RichEmbed()
        .setDescription('Kick')
        .setColor('#ff0800')
        .addField('Kicked user: ', `${kickedUser}`)
        .addField('Reason: ', `${kickReason}`)
        .addField('Kicked by: ', message.author.displayName);

        message.guild.member(kickedUser).kick(kickReason);
        message.channel.send(kickedMessage);
}

module.exports.help = {
    name: "kick"
}
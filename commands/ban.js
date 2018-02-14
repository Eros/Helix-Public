const Discord = require('discord.js');

module.exports = async (bot, message, args) => {
    let bannedUser = message.guild.member(message.mentions.users.first
            || message.guild.members.get(args[0]));
        if(!bannedUser)
         return message.channel.send('Couldn\`t find user: ' + `${reportedUser}`);
        let banReason = args.join(' ').slice(22);

        if(!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send('You do not have permission to use this command ' + `<@${message.author.id}>`);
        if(kickedUser.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send('That user cannot be kicked by you!'); 

        let banMessage = new Discord.RichEmbed()
        .setDescription('Ban')
        .setColor('#ff0800')
        .addField('Kicked user: ', `${bannedUser}`)
        .addField('Reason: ', `${banReason}`)
        .addField('Kicked by: ', message.author.displayName);

        message.guild.member(bannedUser).ban(banReason);
        message.channel.send(banMessage);
}

module.exports.help = {
    name: "ban"
}
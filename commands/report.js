const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
   let reportedUser = message.guild.member(message.mentions.users.first
         || message.guild.members.get(args[0])); //gets the reported user durrrr
        if(!reportedUser)
            message.channel.send('Couldn\`t find user: ' + `${reportedUser}`);
        let reason = args.join(' ').slice(22);
        
        let reportMessage = new Discord.RichEmbed()
        .setDescription('Outstanding report.')
        .setColor('#ff0800')
        .addField('User: ', `${reportedUser}`)
        .addField('By: ', `${message.member.displayName}`)
        .addField('For: ', reason)
        .addField('Channel: ', message.channel)
        .addField('Time: ', message.createdAt)
        .addField('Reported by: ', `<@${message.author.id}>`);

        let reportChannel = message.guild.channels.find(`name`, `reports`);
        
        if(!reportChannel)
            return message.channel.send('Could not find a report channel!');

        message.delete().catch(O_o=>{});
        reportChannel.send(reportMessage);
}

module.exports.help = {
    name: "report"
}
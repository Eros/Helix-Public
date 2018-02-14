const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

    let userMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!userMute)
        return message.reply(`Couldn't find user ${userMute}`);
    let muteRole = message.guild.roles.find(`name`, 'muted');

    if(!muteRole)
    try {
        muteRole = await message.guild.createRole({
            name: "muted",
            color: "#00000",
            permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.permissions.overwritePermission(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });

        }catch(e){
            console.log(e.stack);
        }


    let muteTime = message.guild.members.get(args[1]); 
    if(!muteTime)
        return message.reply('You need to specify a time frame!');
    
    await(userMute.addRole(muteRole.id));
    message.reply(`<@${userMute.id} has been muted for ${ms(ms(muteTime))}`);
    console.log(`${userMute.id} has been muteed for ${(ms(muteTime))} in server ${bot.guild.name}`);
    setTimeOut(function(){
        userMute.removeRole(muteRole.id);
        message.channel.send(`<@${userMute.id}> has been unmuted!`);
    }, ms(muteTime));
}

module.exports.help = {
    name: "tempmute"
}
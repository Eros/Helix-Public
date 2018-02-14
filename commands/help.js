const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let helpMessage = new Discord.RichEmbed()
        helpMessage.setColor('#10d302');
        helpMessage.setTitle('[--------] Help [--------]');
        helpMessage.addField('Important', 'All commands require > before them. Any command with >helix and * are for the Helix development team');
        helpMessage.addField('~> Useful:', 'service, help <dm>.')
        helpMessage.addField('~> Fun:', 'roastme (disabled), giphy');
        helpMessage.addField('~> Hypixel: ', 'playerinfo <username>');
        helpMessage.addField('~> Useful:', 'report <username> <reason>, serverinfo, kick <username> <reason>, ban <username> <reason>, tempmute <username> <reason>');
        helpMessage.addField('~> Admin*:', 'Under development');
        helpMessage.addField('~> Dev*:', 'kys, git-update, git-fetch, cli-status, shutdown-module <module-name>');
        helpMessage.setFooter('Please contact @RapidTheNerd via Twitter for bugs.');
        helpMessage.setAuthor('Helix Commands');
        helpMessage.setDescription('List of commands');
        message.channel.send(helpMessage);
}

module.exports.help = {
    name: "help"
}
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if(cmd.args.length === 2){ 
    giphy.random(function(err, trending){
                message.reply(trending.data.image_original_url);
            });
        } else {
            const search = args.join(' ');
            giphy.search({q: search}, function(err, tredning){
                if(err){
                    message.reply("Something broke with Giphy :( Please contact @RapidTheNerd on Twitter");
                } else {
                    let found = trending.data.length;
                    if(found == 0){
                        message.reply('Can\`t find a giph with that search!')
                    } else {
                        let rand = getRandom(0, found - 1);
                        message.reply(tredning.data[rand].images.original_url);
                    }
                }
            });
        }
}

module.exports.help = {
    name: "giphy"
}
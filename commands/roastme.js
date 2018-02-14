const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var fs = require('fs'),
    readline = require('readline');

    var rd = readline.createInterface({
    input: fs.createReadStream('./roasts.txt'),
    output: process.stdout,
    console: false
});

rd.on('line', function(line){
    rm = getRandom(1, 22);
    message.channel.send(rm);
    })  
}

module.exports.help = {
    name: "roastme"
}

function getRandom(min, max){
    return Math.floor(Math.random * (max - min + 1)) + min;
}
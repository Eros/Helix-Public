//this stuff here is global things that are required to actually make shit work
const config = require("./config.json");
const Discord = require("discord.js");
const giphy = require('giphy')(config.giphy_api_key);
const bot = new Discord.Client();
const fs = require('fs');
bot.commands = new Discord.Collection();
/*
allows us to have commands in a seperate folder
stops it from all being made into the index folder
*/
fs.readdir('./commands/', (err, files) => {
    if(err)
        console.log(err);
    let jsFile = files.filter(f => f.split('.').pop() === 'js');
    if(jsFile.length <= 0){
        console.log('Commands could not be loaded!');
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`Commands: ${f} have been loaded!`);
        bot.commands.set(props.help.name, props);
    });
});
//the initial starting stage of the bot
bot.on('ready', async => {
    console.log(`${bot.user.username} is now online in ${bot.guilds.size} servers!`);
    console.log(`${bot.user.username} is now active in server ${bot.guilds}`); //will probably break
   
    bot.user.setActivity('>help', {type: "STREAMING"});
});
//hanldes all the bot messages, reading and prevents DM's being sent tot he bot
bot.on("message", message => {
    let messages = message;
    if(message.author.bot)
        return;
    if(message.channel.type === "dm")
        return; //will send the help message soon

    let prefix = config.prefix;
    let adminPrefix = config.adminPrefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandFile = bot.commands.get(cmd.slice(prefix.length));

    if(commandFile) 
    commandFile.run(bot, message, args);

});
//do i really need to explain this?
bot.login(config.token);

function getRandom(min, max){
    return Math.floor(Math.random * (max - min + 1)) + min;
}
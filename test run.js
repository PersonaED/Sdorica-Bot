
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !angeliar
            case 'angeliar':
                bot.sendMessage({
                    to: channelID,
                    message: 'Angelia R: Thy Fair Lady **Passive:** - **Advisor Skill:** Grant front row ally (x0.6) Armor (CD: 3) **1B:** Grant front row ally (x0.6) Armor, trigger 1 block skill **2B:** Grant all allies (x0.72) Armor **4B:** Heal (Attack power Icon x 1.8) front row ally'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
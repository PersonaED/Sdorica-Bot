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
            // !angelia r
            case 'angelia r':
                bot.sendMessage({
                    to: channelID,
                    message: ' Angelia R: Thy Fair Lady
                    
                    https://vignette.wikia.nocookie.net/sdorica/images/8/86/%28Thy_Fair_Lady%29_Angelia.png/revision/latest?cb=20170918005835
                    '
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

import Discord from 'discord.js';
import redis from 'redis';
import settings from './settings';
import { standardPrefix } from './config';
import { characterInfoCommand, characterCommand } from './commands/characters';
import { millionInfuseCommand } from './commands/infuse';
import funCommand from './commands/fun';
import helpCommand from './commands/help';
import devCommand from './commands/dev';
import guideCommand from './commands/guides';

const client = new Discord.Client();
const redisClient = redis.createClient();

client.on('ready', () => {
  console.log('Sdorica Bot Ready');
});

redisClient.on('error', (err) => {
  console.log(`RedisErr ${err}`);
});

const alignCommand = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}night`) {
    message.channel.send('Gugubye!! :wave:');
    return true;
  }
  if (splitContent[0] === `${standardPrefix}gday`) {
    message.channel.send('Selamat puggi! :man_dancing:');
    return true;
  }
  if (characterInfoCommand(message, splitContent)) {
    return true;
  }
  if (millionInfuseCommand(message, splitContent)) {
    return true;
  }
  if (funCommand(message, splitContent)) {
    return true;
  }
  if (helpCommand(message, splitContent)) {
    return true;
  }
  if (characterCommand(message, splitContent)) {
    return true;
  }
  if (guideCommand(message, splitContent)) {
    return true;
  }
  if (devCommand(message, splitContent)) {
    return true;
  }
  return false;
};

client.on('message', (message) => {
  const content = message.content.toLowerCase();
  const userID = message.author.id;
  const splitContent = content.split(' ');

  if (content.charAt(0) !== standardPrefix) {
    return;
  }

  // Check if user allowed to call command
  redisClient.ttl(`cooldown:${userID}`, (err, res) => {
    if (res > 0) {
      message.channel.send(`**${message.author.username}**, cooldown in (**${res}** sec)`)
        .then((msg) => {
          msg.delete(5000);
        })
        .catch();
    } else if (alignCommand(message, splitContent)) {
      redisClient.set(`cooldown:${userID}`, '', 'EX', 5);
    }
  });
});

client.login(settings.token);

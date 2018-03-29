import Discord from 'discord.js';
import settings from './settings';
import { characterInfoCommand } from './commands/characters/characterInfo';
import { millionInfuseCommand } from './commands/infuse/million';
import funCommand from './commands/fun';

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Sdorica Bot Ready');
});

client.on('message', (message) => {
  const content = message.content.toLowerCase();
  const splitContent = content.split(' ');

  if (content.charAt(0) !== '!') {
    return;
  }

  characterInfoCommand(message, splitContent);
  millionInfuseCommand(message, splitContent);
  funCommand(message, splitContent);
});

client.login(settings.token);

import Discord from 'discord.js';
import settings from './settings';
import { standardPrefix } from './config';
import { characterInfoCommand, characterCommand } from './commands/characters';
import { millionInfuseCommand } from './commands/infuse';
import funCommand from './commands/fun';
import helpCommand from './commands/help';
import devCommand from './commands/dev';
import guideCommand from './commands/guides';

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Sdorica Bot Ready');
});

client.on('message', (message) => {
  const content = message.content.toLowerCase();
  const splitContent = content.split(' ');

  if (content.charAt(0) !== standardPrefix) {
    return;
  }

  if (characterInfoCommand(message, splitContent)) {
    return;
  }
  if (millionInfuseCommand(message, splitContent)) {
    return;
  }
  if (funCommand(message, splitContent)) {
    return;
  }
  if (helpCommand(message, splitContent)) {
    return;
  }
  if (characterCommand(message, splitContent)) {
    return;
  }
  if (guideCommand(message, splitContent)) {
    return;
  }
  devCommand(message, splitContent);
});

client.login(settings.token);

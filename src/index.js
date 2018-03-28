import buckets from 'buckets-js';
import Discord from 'discord.js';
import rwc from 'random-weighted-choice';

import { getRandomInt } from './helper';
import { characters as JSONcharacter, summon } from './assets';
import settings from './settings';
import { mapCharacterNames } from './commandMap';

const client = new Discord.Client();
const validTiers = ['n', 'r', 'sr', 'ssr'];
const validInfuse = ['n', 'r', 'sr'];

const { yanbo, ...rest } = JSONcharacter;
const characterMap = {
  ...rest,
  'yan-bo': yanbo,
};

// table for million infuse
const summonTable = [];

Object.keys(summon.million).forEach((tier) => {
  Object.keys(summon.million[tier]).forEach((characterKey) => {
    const charName = `${characterKey} ${tier}`;
    const characterProbability = {
      weight: summon.million[tier][characterKey],
      id: charName,
    };
    summonTable.push(characterProbability);
  });
});

// Comparison function used for BST
const compare = (a, b) => {
  if (a < b) {
    return -1;
  } if (a > b) {
    return 1;
  }
  return 0;
};

// BST to store valid commands for characters
const searchPointer = new buckets.BSTree(compare);
Object.keys(characterMap).forEach((characterInfo) => {
  const charType = Object.keys(characterMap[characterInfo]);
  charType.forEach((keyName) => {
    searchPointer.add(keyName);
  });
});

client.on('ready', () => {
  console.log('I am ready!');
});

const sendMessage = (characterInfo, message) => {
  const { tier, block, status } = characterInfo;
  const messageTemplate = {
    embed: {
      thumbnail: {
        url: characterInfo.sprite || '-',
      },
      author: {
        name: characterInfo.name || '-',
      },
      fields: [
        {
          name: `Passive: ${characterInfo.passive.name}`,
          value: characterInfo.passive.description || '-',
        },
        {
          name: `Advisor Skill: ${characterInfo.advisor.name}`,
          value: characterInfo.advisor.description || '-',
        },
        {
          name: `1B: ${characterInfo['1B'].name}`,
          value: characterInfo['1B'].description || '-',
        },
        {
          name: `2B: ${characterInfo['2B'].name}`,
          value: characterInfo['2B'].description || '-',
        },
        {
          name: `4B: ${characterInfo['4B'].name}`,
          value: characterInfo['4B'].description || '-',
        },
      ],
    },
  };

  if (status && status.length !== 0) {
    let statusString = '';

    const sortedStatus = [...status].sort();
    sortedStatus.forEach((effect) => {
      const discordStyled = `\n\n_${effect}_`;
      statusString = `${statusString}${discordStyled}`;
    });
    const statusEffects = {
      name: '_',
      value: statusString,
    };
    const currentFields = [...messageTemplate.embed.fields];
    currentFields.push(statusEffects);
    messageTemplate.embed.fields = currentFields;
  }

  if (block) {
    switch (block.toLowerCase()) {
      case 'gold': {
        messageTemplate.embed.color = 15778654;
        break;
      }
      case 'yellow': {
        messageTemplate.embed.color = 15778654;
        break;
      }
      case 'black': {
        messageTemplate.embed.color = 4928799;
        break;
      }
      case 'white': {
        messageTemplate.embed.color = 16777205;
        break;
      }
      default: {
        messageTemplate.embed.color = 4886754;
      }
    }
  }

  if (tier) {
    switch (tier.toLowerCase()) {
      case validTiers[0]: {
        messageTemplate.embed.author.icon_url = 'https://i.imgur.com/8deb9BH.png';
        break;
      }
      case validTiers[1]: {
        messageTemplate.embed.author.icon_url = 'https://i.imgur.com/2zOUJmF.png';
        break;
      }
      case validTiers[2]: {
        messageTemplate.embed.author.icon_url = 'https://i.imgur.com/8xIe2Iv.png';
        break;
      }
      case validTiers[3]: {
        messageTemplate.embed.author.icon_url = 'https://i.imgur.com/gBz92gT.png';
        break;
      }
      default: {
        break;
      }
    }
  }
  message.channel.send(messageTemplate);
};

client.on('message', (message) => {
  const content = message.content.toLowerCase();
  const splitContent = content.split(' ');

  // if missing !, ignore everything
  if (content.charAt(0) !== '!') {
    return;
  }

  // send message for particular sdorica hero character
  if (splitContent.length >= 2) {
    const mappedNamesArray = mapCharacterNames(splitContent);
    const name = mappedNamesArray[0].replace('!', '').toLowerCase();
    const type = mappedNamesArray[1].toLowerCase();
    const joinedMessage = `${name} ${type}`;
    if (searchPointer.contains(joinedMessage)) {
      sendMessage(characterMap[name][joinedMessage], message);
    }
  } else {
    // check if missing the n/r/sr/srr/skin/sp part
    // does not check if second param is incorrectly named
    const mappedNamesArray = mapCharacterNames(splitContent);
    const name = mappedNamesArray[0].replace('!', '').toLowerCase();
    const charactersArray = Object.keys(characterMap);

    if (charactersArray.includes(name)) {
      message.channel.send(`Enter in a tier of n/r/sr/ssr/skin/sp. \n\nExample: !${name} ssr`);
    }
  }

  if (splitContent[0] === '!summon' || splitContent[0] === '!infuse') {
    if (splitContent.length > 1 && splitContent[1] === '10') {
      const infuseTen = {};
      const infuseAggregate = [];
      for (let i = 0; i < 10; i += 1) {
        const infuseResult = rwc(summonTable);
        if (infuseTen[infuseResult] === undefined) {
          infuseTen[infuseResult] = 1;
        } else {
          infuseTen[infuseResult] += 1;
        }
      }
      Object.keys(infuseTen).forEach((key) => {
        infuseAggregate.push(`${key} (x${infuseTen[key]})`);
      });
      infuseAggregate.sort();
      message.channel.send(infuseAggregate.join(', '));
      return;
    }
    if (splitContent.length > 1 && splitContent[1] === '100') {
      const infuseHundred = {};
      const infuseAggregate = [];
      for (let i = 0; i < 100; i += 1) {
        const infuseResult = rwc(summonTable);
        if (infuseHundred[infuseResult] === undefined) {
          infuseHundred[infuseResult] = 1;
        } else {
          infuseHundred[infuseResult] += 1;
        }
      }
      Object.keys(infuseHundred).forEach((key) => {
        infuseAggregate.push(`${key} (x${infuseHundred[key]})`);
      });
      infuseAggregate.sort();
      message.channel.send(infuseAggregate.join(', '));
      return;
    }

    const selectedChar = rwc(summonTable);
    const splitChar = selectedChar.split(' ');
    // check if json object exists for given character
    const jsonInfuse = characterMap[splitChar[0]];
    if (jsonInfuse === undefined) {
      message.channel.send(`Your million infuse was: ${selectedChar}`);
    } else {
      const infuseResult = characterMap[splitChar[0]][selectedChar];
      // check if key is present in character file
      if (infuseResult === undefined) {
        message.channel.send(`Your million infuse was: ${selectedChar}`);
      } else {
        sendMessage(infuseResult, message);
      }
    }
  }

  if (splitContent[0] === '!best' && splitContent[1] === 'doggo') {
    message.channel.send(':dog: :fire: Koll is the best fire doggo');
  }

  // FIXME: Remove this once found, easter egg
  if (splitContent[0] === '!best' && splitContent[1] === 'chengkor') {
    message.channel.send('https://cdn.discordapp.com/attachments/378408289748385797/428523939350708224/image.jpg');
  }
});

client.login(settings.token);

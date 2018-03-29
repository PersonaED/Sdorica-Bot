import buckets from 'buckets-js';
import { mapCharacterNames } from './commandMap';
import { characterMap } from '../constants';
import { standardPrefix } from '../../config';

const validTiers = ['n', 'r', 'sr', 'ssr'];
const compare = (a, b) => {
  if (a < b) {
    return -1;
  } if (a > b) {
    return 1;
  }
  return 0;
};

const searchPointer = new buckets.BSTree(compare);
Object.keys(characterMap).forEach((characterInfo) => {
  const charType = Object.keys(characterMap[characterInfo]);
  charType.forEach((keyName) => {
    searchPointer.add(keyName);
  });
});

export const sendCharacterInfo = (characterInfo, message, infuse) => {
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
  if (infuse) {
    const sender = `**${message.author.username}**`;
    message.channel.send(`${sender}, you have infused: ${characterInfo.name}\n`, messageTemplate);
  } else {
    message.channel.send(messageTemplate);
  }
};


export const characterInfoCommand = (message, splitContent) => {
  if (splitContent.length >= 2) {
    const standardNameArray = mapCharacterNames(splitContent);
    const name = standardNameArray[0].replace(standardPrefix, '').toLowerCase();
    const type = standardNameArray[1].toLowerCase();
    const characterKey = `${name} ${type}`;
    if (searchPointer.contains(characterKey)) {
      sendCharacterInfo(characterMap[name][characterKey], message);
      return true;
    }
  } else {
    const standardNameArray = mapCharacterNames(splitContent);
    const name = standardNameArray[0].replace(standardPrefix, '').toLowerCase();
    const charactersArray = Object.keys(characterMap);

    if (charactersArray.includes(name)) {
      // if name is valid, then check if the tier is correct
      const orderArray = [];
      const topLine = `**Options for ${name} - **`;
      orderArray.push(topLine);

      const options = Object.keys(characterMap[name]).map((keyChar) => {
        const styledKey = `\`${keyChar}\``;
        return styledKey;
      });
      const filteredOptions = options.filter(phrase => !phrase.includes('unreleased'));
      orderArray.push(filteredOptions.join(', '));
      let finalString = '';
      orderArray.forEach((item) => {
        finalString = `${finalString} ${item}`;
      });
      message.channel.send(finalString);
      return true;
    }
  }
  return false;
};

export const characterCommand = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}characters` || splitContent[0] === `${standardPrefix}character`) {
    const orderArray = [];

    const header = '```css\n `Character List` \n```';
    orderArray.push(header);

    const example = 'Use `![character] [tier]` to get character information. For example: `!angelia n`\n';
    orderArray.push(example);

    const char = Object.keys(characterMap).sort().map((keyChar) => {
      const styledKey = `\`${keyChar}\``;
      return styledKey;
    });
    orderArray.push(`${char.join(', ')}\n`);

    const warning = '```\n # Don\'t include the brackets when using commands! \n\n # Tier options: n/r/sr/ssr/skin/sp \n```';
    orderArray.push(warning);

    let finalString = '';
    orderArray.forEach((item) => {
      finalString = `${finalString}\n${item}`;
    });
    message.channel.send(finalString);
    return true;
  }
  return false;
};

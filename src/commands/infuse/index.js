import rwc from 'random-weighted-choice';
import { summon } from '../../assets';
import { characterMap } from '../constants';
import { sendCharacterInfo } from '../characters';
import { standardPrefix } from '../../config';
import { capitalizeFirstLetter } from '../helper';

// table for million infuse
const millionInfuseTable = [];
Object.keys(summon.million).forEach((tier) => {
  Object.keys(summon.million[tier]).forEach((characterKey) => {
    const charName = `${characterKey} ${tier}`;
    const characterProbability = {
      weight: summon.million[tier][characterKey],
      id: charName,
    };
    millionInfuseTable.push(characterProbability);
  });
});

const millionInfuseSROnly = [];
Object.keys(summon.million.sr).forEach((characterKey) => {
  const charName = `${characterKey} sr`;
  const characterProbability = {
    weight: summon.million.sr[characterKey],
    id: charName,
  };
  millionInfuseSROnly.push(characterProbability);
});

const rollOne = (message, summonTable) => {
  const sender = `**${message.author.username}**`;
  const selectedChar = rwc(summonTable);
  const splitChar = selectedChar.split(' ');
  // check if json object exists for given character
  const jsonInfuse = characterMap[splitChar[0]];
  if (jsonInfuse === undefined) {
    message.channel.send(`${sender}, you have infused: ${capitalizeFirstLetter(splitChar[0])} ${splitChar[1].toUpperCase()}`);
  } else {
    const infuseResult = characterMap[splitChar[0]][selectedChar];
    // check if key is present in character file
    if (infuseResult === undefined) {
      message.channel.send(`${sender}, you have infused: ${capitalizeFirstLetter(splitChar[0])} ${splitChar[1].toUpperCase()}`);
    } else {
      sendCharacterInfo(infuseResult, message, true);
    }
  }
};

const rollMany = (message, summonTable, count, guaranteeSR) => {
  const sender = `**${message.author.username}**`;
  const infuseMany = {};
  const infuseAggregate = [];
  let rollNumber = count;
  if (guaranteeSR) {
    rollNumber -= 1;
    const infuseResult = rwc(millionInfuseSROnly);
    infuseMany[infuseResult] = 1;
  }
  for (let i = 0; i < rollNumber; i += 1) {
    const infuseResult = rwc(summonTable);
    if (infuseMany[infuseResult] === undefined) {
      infuseMany[infuseResult] = 1;
    } else {
      infuseMany[infuseResult] += 1;
    }
  }
  Object.keys(infuseMany).forEach((key) => {
    const keySplit = key.split(' ');
    const name = capitalizeFirstLetter(keySplit[0]);
    const tier = keySplit[1].toUpperCase();
    infuseAggregate.push(`${name} ${tier} (x${infuseMany[key]})`);
  });
  infuseAggregate.sort();
  message.channel.send(`${sender}, you have infused: \n\n${infuseAggregate.join(', ')}`);
};

export const millionInfuseCommand = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}summon` || splitContent[0] === `${standardPrefix}infuse`) {
    if (splitContent.length > 1 && splitContent[1] === '10') {
      rollMany(message, millionInfuseTable, 10, true);
    } else if (splitContent.length > 1 && splitContent[1] !== '10') {
      message.channel.send('**Infuse commands - ** `infuse` `infuse 10`');
    } else {
      rollOne(message, millionInfuseTable);
    }
    return true;
  }
  return false;
};

export const bannerInfuseCommand = () => {
  console.log('Banner holder');
  return null;
};

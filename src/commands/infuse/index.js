import rwc from 'random-weighted-choice';
import { summon } from '../../assets';
import { characterMap } from '../constants';
import { sendCharacterInfo } from '../characters';

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

export const millionInfuseCommand = (message, splitContent) => {
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
        sendCharacterInfo(infuseResult, message);
      }
    }
  }
};

export const bannerInfuseCommand = () => {
  console.log('Banner holder');
  return null;
};

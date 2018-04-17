import rwc from 'random-weighted-choice';
import { summon } from '../../assets';
import { characterMap } from '../constants';
import { sendCharacterInfo } from '../characters';
import { standardPrefix } from '../../config';
import { capitalizeFirstLetter } from '../helper';
import Jimp from 'jimp';

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

function pieceImages(arr, idx, bg, msg, io) {
  if (idx < 10) {
    Jimp.read(`./art_pack/default/${arr[idx]}.png`, (err, img) => {
      if (err) {
        console.log(err);
        pieceImages(arr, idx + 1, bg, msg, io);
      } else {
        pieceImages(arr, idx + 1, bg.composite(img, (idx % 5) * 255, 365 * parseInt(idx / 5, 10)), msg, io);
      }
    });
  } else {
    // bg.write('./output.png');
    bg.resize(700, 425).quality(50).getBuffer(Jimp.MIME_PNG, (error, buffer) => {
      io.sendFile(buffer, '', msg);
    });
  }
}

const rollMany = (message, summonTable, count, guaranteeSR, isChengkor) => {
  const sender = `**${message.author.username}**`;
  const infuseMany = {};
  const infuseAggregate = [];
  const rollNumber = count - 1;

  let rollSnaps = [];

  // roll X normal
  for (let i = 0; i < rollNumber; i += 1) {
    const infuseResult = rwc(summonTable);
    rollSnaps.push(infuseResult.replace(' ', '_'));
    if (infuseMany[infuseResult] === undefined) {
      infuseMany[infuseResult] = 1;
    } else {
      infuseMany[infuseResult] += 1;
    }
  }

  let rollSR = true;
  Object.keys(infuseMany).forEach((infuse) => {
    const res = infuse.split(' ');
    // if already have sr, roll from normal table and prevent 100% chance for extra SR
    if (res[1].toLowerCase() === 'sr' && rollSR === true) {
      rollSR = false;
      const infuseResult = rwc(summonTable);
      rollSnaps.push(infuseResult.replace(' ', '_'));
      if (infuseMany[infuseResult] === undefined) {
        infuseMany[infuseResult] = 1;
      } else {
        infuseMany[infuseResult] += 1;
      }
    }
  });

  if (isChengkor) {
    rwc(millionInfuseSROnly);
    infuseMany['yami sr'] = 1;
    rollSnaps.push('yami_sr');
    // if not have SR, roll from SR table
  } else if (guaranteeSR && rollSR === true) {
    const infuseResult = rwc(millionInfuseSROnly);
    infuseMany[infuseResult] = 1;
    rollSnaps.push(infuseResult.replace(' ', '_'));
  }

  Object.keys(infuseMany).forEach((key) => {
    const keySplit = key.split(' ');
    const name = capitalizeFirstLetter(keySplit[0]);
    const tier = keySplit[1].toUpperCase();
    infuseAggregate.push(`${name} ${tier} (x${infuseMany[key]})`);
  });
  infuseAggregate.sort();
  // message.channel.send(`${sender}, you have infused: \n\n${infuseAggregate.join(', ')}`);

  const bg = new Jimp(1400, 850, 0x00000000, (err, bgx) => {
    pieceImages(rollSnaps, 0, bgx, `${sender}, you have infused: \n\n${infuseAggregate.join(', ')}`, message.channel);
  });
};

export const millionInfuseCommand = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}summon` ||
      splitContent[0] === `${standardPrefix}infuse` ||
      splitContent[0] === `${standardPrefix}god-infuse`) {
    if (splitContent.length > 1 && splitContent[1] === '10') {
      rollMany(message, millionInfuseTable, 10, true, (splitContent[0] === `${standardPrefix}god-infuse`));
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

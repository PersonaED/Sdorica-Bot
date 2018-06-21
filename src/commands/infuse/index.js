import rwc from 'random-weighted-choice';
import { summon } from '../../assets';
import { characterMap } from '../constants';
import { sendCharacterInfo } from '../characters';
import { standardPrefix } from '../../config';
import { capitalizeFirstLetter } from '../helper';
import Jimp from 'jimp';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

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

// harvest infuse table
const harvestInfuseTable = [];
Object.keys(summon.harvest).forEach((tier) => {
  Object.keys(summon.harvest[tier]).forEach((characterKey) => {
    const charName = `${characterKey} ${tier}`;
    const characterProbability = {
      weight: summon.harvest[tier][characterKey],
      id: charName,
    };
    harvestInfuseTable.push(characterProbability);
  });
});

const harvestInfuseTableSROnly = [];
Object.keys(summon.harvest.sr).forEach((characterKey) => {
  const charName = `${characterKey} sr`;
  const characterProbability = {
    weight: summon.harvest.sr[characterKey],
    id: charName,
  };
  harvestInfuseTableSROnly.push(characterProbability);
});

const rollOne = (message, summonTable, artPack = 'default') => {
  const sender = `**${message.author.username}**`;
  const selectedChar = rwc(summonTable);
  const splitChar = selectedChar.split(' ');
  // check if json object exists for given character
  const jsonInfuse = characterMap[splitChar[0]];
  const greeting = `${sender}, you have infused: ${capitalizeFirstLetter(splitChar[0])} ${splitChar[1].toUpperCase()}`;
  if (jsonInfuse === undefined) {
    message.channel.send(greeting);
  } else {
    const infuseResult = characterMap[splitChar[0]][selectedChar];
    // check if key is present in character file
    if (infuseResult === undefined) {
      message.channel.send(greeting);
    } else {
      // sendCharacterInfo(infuseResult, message, true);
      Jimp.read(`./art_pack/${artPack}/${splitChar[0]}_${splitChar[1]}.png`, (err, img) => {
        img.autocrop().scale(0.3).getBuffer(Jimp.MIME_PNG, (error, buffer) => {
          message.channel.send(`${greeting}`, {
            files: [
              buffer,
            ],
          });
        });
      });
    }
  }
};

function pieceImages(arr, idx, bg, msg, io, artPack = 'default') {
  if (idx < 10) {
    Jimp.read(`./art_pack/${artPack}/${arr[idx]}.png`, (err, img) => {
      if (err) {
        console.log(err);
        pieceImages(arr, idx + 1, bg, msg, io, artPack);
      } else {
        pieceImages(arr, idx + 1, bg.composite(img, (idx % 5) * 305, 415 * parseInt(idx / 5, 10)), msg, io, artPack);
      }
    });
  } else {
    // bg.write('./output.png');
    bg.resize(900, 475).quality(50).getBuffer(Jimp.MIME_PNG, (error, buffer) => {
      io.send(`${msg}`, {
        files: [
          buffer,
        ],
      });
    });
  }
}

const rollMany = (message, summonTable, count, guaranteeSR, isChengkor, artPack, sumTableSROnly) => {
  const sender = `**${message.author.username}**`;
  const infuseMany = {};
  const infuseAggregate = [];
  const rollNumber = count - 1;

  const rollSnaps = [];

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
    rwc(sumTableSROnly);
    infuseMany['yamitsuki sr'] = 1;
    rollSnaps.push('yamitsuki_sr');
    // if not have SR, roll from SR table
  } else if (guaranteeSR && rollSR === true) {
    const infuseResult = rwc(sumTableSROnly);
    infuseMany[infuseResult] = 1;
    rollSnaps.push(infuseResult.replace(' ', '_'));
  }

  shuffleArray(rollSnaps);

  rollSnaps.forEach((key) => {
    const keySplit = key.split('_');
    const name = capitalizeFirstLetter(keySplit[0]);
    const tier = keySplit[1].toUpperCase();
    infuseAggregate.push(`${name} ${tier}`);
  });

  const bg = new Jimp(1800, 950, 0x00000000, (err, bgx) => {
    pieceImages(rollSnaps, 0, bgx, `${sender}, you have infused: \n\n${infuseAggregate.join(', ')}`, message.channel, artPack);
  });
};

export const millionInfuseCommand = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}summon` ||
      splitContent[0] === `${standardPrefix}infuse` ||
      splitContent[0] === `${standardPrefix}god-infuse`) {
    if (splitContent.length > 1 && splitContent[1] === 'chenggod') {
      const sender = `**${message.author.username}**`;
      message.channel.send(`:pray: ${sender} has called for chenggod. He blesses you with Yami luck`, { files: ['https://media.discordapp.net/attachments/427835062306865162/435825797841027085/chenggodsummon.png'] });
    } else if (splitContent.length > 1 && splitContent[1] === '10') {
      rollMany(message, millionInfuseTable, 10, true, (splitContent[0] === `${standardPrefix}god-infuse`), splitContent[2], millionInfuseSROnly);
    } else if (splitContent.length > 1 && splitContent[1] !== '10') {
      message.channel.send('**Infuse commands - ** `infuse` `infuse 10` `infuse chenggod`');
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

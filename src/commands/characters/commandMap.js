import { standardPrefix } from '../../config';

/*
 * If a given command is found, convert it to a standard format that is aligned with json keys.
 * Use this mapping when people use a certain command and expect X result. Such as yan-bo and yanbo
 */
const mapCharacterNames = (messageArray) => {
  const copiedMessage = [...messageArray];

  //yanbo/yan-bo
  if (copiedMessage[0] === `${standardPrefix}yanbo`) {
    copiedMessage[0] = `${standardPrefix}yan-bo`;
  }

  //angel/angelia
  if (copiedMessage[0] === `${standardPrefix}angel`) {
    copiedMessage[0] = `${standardPrefix}angelia`;
  }

  //fred/fredrica
  if (copiedMessage[0] === `${standardPrefix}fred`) {
    copiedMessage[0] = `${standardPrefix}fredrica`;
  }

  //yami/yamitsuki
  if (copiedMessage[0] === `${standardPrefix}yami`) {
    copiedMessage[0] = `${standardPrefix}yamitsuki`;
  }
  
  //golem/golemwalt
  if (copiedMessage[0] === `${standardPrefix}golem`) {
    copiedMessage[0] = `${standardPrefix}golemwalt`;
  }
  
  //kitty/kittyeyes
  if (copiedMessage[0] === `${standardPrefix}kitty`) {
    copiedMessage[0] = `${standardPrefix}kittyeyes`;
  }

  //angelia skin/black
  if (copiedMessage[0] === `${standardPrefix}angelia` && copiedMessage[1] === 'black') {
    copiedMessage[1] = 'skin';
  }
  
  //maskedgirl/celia
  if (copiedMessage[0] === `${standardPrefix}maskedgirl`) {
    copiedMessage[0] = `${standardPrefix}celia`;
  }
  
  //masked-girl/celia
  if (copiedMessage[0] === `${standardPrefix}masked-girl`) {
    copiedMessage[0] = `${standardPrefix}celia`;
  }
  
  //dbs/dumb bear soldier
  if (copiedMessage[0] === `${standardPrefix}dbs`) {
    copiedMessage[0] = `${standardPrefix}dumb bear soldier`;
  }
  return copiedMessage;
};

export {
  mapCharacterNames,
};

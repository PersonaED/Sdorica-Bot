import { standardPrefix } from '../../config';

/*
 * If a given command is found, convert it to a standard format that is aligned with json keys.
 * Use this mapping when people use a certain command and expect X result. Such as yan-bo and yanbo
 */
const mapCharacterNames = (messageArray) => {
  const copiedMessage = [...messageArray];

  // yanbo/yan-bo
  if (copiedMessage[0] === `${standardPrefix}yanbo`) {
    copiedMessage[0] = `${standardPrefix}yan-bo`;
  }

  //fred/fredrica
  if (copiedMessage[0] === `${standardPrefix}fred`) {
    copiedMessage[0] = `${standardPrefix}fredrica`;
  }

  if (copiedMessage[0] === `${standardPrefix}yami`) {
    copiedMessage[0] = `${standardPrefix}yamitsuki`;
  }

  // angelia skin/black
  if (copiedMessage[0] === `${standardPrefix}angelia` && copiedMessage[1] === 'black') {
    copiedMessage[1] = 'skin';
  }
  return copiedMessage;
};

export {
  mapCharacterNames,
};

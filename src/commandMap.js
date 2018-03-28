/*
 * If a given command is found, convert it to a standard format that is aligned with json keys.
 * Use this mapping when people use a certain command and expect X result. Such as yan-bo and yanbo
 */
const mapCharacterNames = (messageArray) => {
  const copiedMessage = [...messageArray];

  // yanbo/yan-bo
  if (copiedMessage[0] === '!yanbo') {
    copiedMessage[0] = '!yan-bo';
  }

  // angelia skin/black
  if (copiedMessage[0] === '!angelia' && copiedMessage[1] === 'black') {
    copiedMessage[1] = 'skin';
  }
  return copiedMessage;
};

export {
  mapCharacterNames,
};

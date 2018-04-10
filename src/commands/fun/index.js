import { standardPrefix } from '../../config';

const fun = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}best` && splitContent[1] === 'doggo') {
    message.channel.send(':dog: :fire: Koll is the best fire doggo');
    return true;
  }

  if (splitContent[0] === `${standardPrefix}chenggod`) {
    message.channel.sendFile('https://i.imgur.com/kCXOoqf.png');
    return true;
  }
  return false;
};

export default fun;

import { standardPrefix } from '../../config';

export const helpCommand = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}dev`) {
    const finalString = '**Credit -** Karen, chengkor, JayDex, guguBird, Malacia';
    message.channel.send(finalString);
    return true;
  }
  return false;
};

export default helpCommand;

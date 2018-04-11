import { standardPrefix } from '../../config';

export const helpCommand = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}dev`) {
    const finalString = '**Credits to -** Karen, chengkor, JayDex, guguBird, Malacia, Ionasal \n\n_With the help of the Wiki, English game client, and Chinois_';
    message.channel.send(finalString);
    return true;
  }
  return false;
};

export default helpCommand;

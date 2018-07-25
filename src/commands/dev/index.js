import { standardPrefix } from '../../config';

export const helpCommand = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}dev`) {
    const finalString = '**Credits to - Members of Sunset Guild:** \nKaren, chengkor, JayDex, guguBird, Malacia, Ionasal, Murasa, Tahlmiir, PersonaED \n\n_With the help of the Wiki, English game client, Chinois, and Pnutz_';
    message.channel.send(finalString);
    return true;
  }
  return false;
};

export default helpCommand;

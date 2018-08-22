import { standardPrefix } from '../../config';

export const helpCommand = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}dev`) {
    const finalString = '**Credits to - Members of Sunset Guild:** \n**Karen** (Karen#7590) \n**JayDex** (JayDex#0244) \n**guguBird** (Agugumon#6461) \n**Malacia** (Malacia#1398) \n**Ionasal** (viwalon#8128) \n**Murasa** (Murasa#6414) \n**Tahlmiir** (Tahlmiir#7777) \n**PersonaED** (PersonaED#6250) \n**chengkor** (chengkor#0330)\n\nWith the help of: \n**Pnutz** (Pnutz🥜#3637) \n**Chinois** (Chinois Sournois#2272 ) \n\n_Information taken from Sdorica Wiki and English game client \nPlease contact **Karen** (Karen#7590) for matters related to the bot_';
    message.channel.send(finalString);
    return true;
  }
  return false;
};

export default helpCommand;

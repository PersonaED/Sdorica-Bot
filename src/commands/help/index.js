import { standardPrefix } from '../../config';

export const helpCommand = (message, splitContent) => {
  if (splitContent[0] === `${standardPrefix}help`) {
    const orderArray = [];

    const header = '```css\n `Standard Commands List` \n```';
    orderArray.push(header);

    const character = `**1. Character Options -** \`${standardPrefix}characters\``;
    orderArray.push(character);

    const infuse = `**2. Gacha Infuse - ** \`${standardPrefix}infuse\` \`${standardPrefix}infuse 10\``;
    orderArray.push(infuse);

    const fun = `**3. Fun - ** \`${standardPrefix}best doggo\` \`${standardPrefix}chenggod\``;
    orderArray.push(fun);

    const credit = `**4. Dev - ** \`${standardPrefix}dev\``;
    orderArray.push(credit);

    let finalString = '';
    orderArray.forEach((item) => {
      finalString = `${finalString}\n${item}`;
    });
    message.channel.send(finalString);
    return true;
  }
  return false;
};

export default helpCommand;

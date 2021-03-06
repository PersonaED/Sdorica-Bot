import { standardPrefix } from "../../config";

// JayDex, Na, Extrang, Cory, Rewase, Brionacc, Setesh, Krestfall, Nothing, Gugu, Meokya, Evermoving, Alan
const validGFLUsers = [
  "128456283115356160",
  "157803628458016768",
  "443039178515677184",
  "121466850163818496",
  "299546369843003392",
  "142361975622467584",
  "368598027113594880",
  "296266721780695040",
  "437600844725354517",
  "452538924490031105",
  "289406908262121472"
];

const onlyForUsers = [
  "157803628458016768",
  "443039178515677184",
  "128456283115356160",
  "289406908262121472"
];

const fun = (message, splitContent) => {
  if (
    splitContent[0] === `${standardPrefix}best` &&
    splitContent[1] === "doggo"
  ) {
    message.channel.send(":dog: :fire: Koll is the best fire doggo");
    return true;
  }

  if (splitContent[0] === `${standardPrefix}chenggod`) {
    message.channel.sendFile("https://i.imgur.com/kCXOoqf.png");
    return true;
  }

  if (
    splitContent[0] === `${standardPrefix}gfl` &&
    onlyForUsers.includes(message.author.id)
  ) {
    let messageBuilder = `<@${message.author.id}> says: `;
    for (let i = 1; i < splitContent.length; i++) {
      messageBuilder = `${messageBuilder} ${splitContent[i]}`;
    }
    if (splitContent.length === 1) {
      messageBuilder = `<@${message.author.id}> Notifying:`;
    }

    let stringBuilder = `${messageBuilder}\n\n`;
    validGFLUsers.forEach(id => {
      if (id !== message.author.id) {
        stringBuilder = `${stringBuilder}<@${id}> `;
      }
    });
    message.channel.send(stringBuilder).then(msg => {
      msg.delete(43200000);
    });
    return true;
  }
  return false;
};

export default fun;

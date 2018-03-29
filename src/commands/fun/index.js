const fun = (message, splitContent) => {
  if (splitContent[0] === '!best' && splitContent[1] === 'doggo') {
    message.channel.send(':dog: :fire: Koll is the best fire doggo');
  }

  if (splitContent[0] === '!chenggod') {
    message.channel.send('https://cdn.discordapp.com/attachments/427835062306865162/428588975058452490/chenggod.png');
  }
};

export default fun;

import buckets from 'buckets-js';
import { angelia, yanbo, yamitsuki } from './assets';
import settings from './settings'
import { mapCharacterNames } from './commandMap';

const Discord = require("discord.js");
const client = new Discord.Client();
const validTiers = ['n', 'r', 'sr', 'ssr']
const characterMap = {
  angelia,
  "yan-bo": yanbo,
  yamitsuki,
};

const compare = (a, b) => {
  if (a < b) {
     return -1;
  } if (a > b) {
     return 1;
  }
  return 0;
}

const searchPointer = new buckets.BSTree(compare);
Object.keys(characterMap).forEach((characterInfo) => {
  const charType = Object.keys(characterMap[characterInfo]);
  charType.forEach((keyName) => {
    searchPointer.add(keyName);
  })
})

client.on("ready", () => {
  console.log("I am ready!");
});

const sendMessage = (characterInfo, message) => {
  const { tier, block, status } = characterInfo;
  const messageTemplate = {
    "embed": {
      "thumbnail": {
        "url": characterInfo.sprite || '-'
      },
      "author": {
        "name": characterInfo.name || '-',
      },
      "fields": [
        {
          "name": `Passive: ${characterInfo.passive.name}`,
          "value": characterInfo.passive.description || '-'
        },
        {
          "name": `Advisor Skill: ${characterInfo.advisor.name}`,
          "value": characterInfo.advisor.description || '-'
        },
        {
          "name": `1B: ${characterInfo["1B"].name}`,
          "value": characterInfo["1B"].description || '-'
        },
        {
          "name": `2B: ${characterInfo["2B"].name}`,
          "value": characterInfo["2B"].description || '-'
        },
        {
          "name": `4B: ${characterInfo["4B"].name}`,
          "value": characterInfo["4B"].description || '-'
        }
      ]
    }
  }

  if (status && status.length !== 0) {
    let statusString = "";

    const sortedStatus = [... status].sort();
    sortedStatus.forEach((effect) => {
      const discordStyled = `\n\n_${effect}_`;
      statusString = `${statusString}${discordStyled}`;
    })
    const statusEffects = {
      "name": "_",
      "value": statusString
    }
    const currentFields = [... messageTemplate.embed.fields];
    currentFields.push(statusEffects);
    messageTemplate.embed.fields = currentFields;
  }

  if (block) {
    switch(block.toLowerCase()) {
      case 'gold': {
        messageTemplate.embed.color = 15778654;
        break;
      }
      case 'yellow': {
        messageTemplate.embed.color = 15778654;
        break;
      }
      case 'black': {
        messageTemplate.embed.color = 4928799;
        break;
      }
      case 'white': {
        messageTemplate.embed.color = 16777205;
        break;
      }
      default: {
        messageTemplate.embed.color = 4886754;
      }
    }
  }

  if (tier) {
    switch(tier.toLowerCase()) {
      case validTiers[0]: {
        messageTemplate.embed.author.icon_url = "https://i.imgur.com/8deb9BH.png";
        break;
      }
      case validTiers[1]: {
        messageTemplate.embed.author.icon_url = "https://i.imgur.com/2zOUJmF.png";
        break;
      }
      case validTiers[2]: {
        messageTemplate.embed.author.icon_url = "https://i.imgur.com/8xIe2Iv.png";
        break;
      }
      case validTiers[3]: {
        messageTemplate.embed.author.icon_url = "https://i.imgur.com/gBz92gT.png";
        break;
      }
      default: {}
    }
  }
  message.channel.send(messageTemplate);
}

client.on("message", (message) => {
  const content = message.content.toLowerCase();
  const splitContent = content.split(" ");

  // if missing !, ignore everything
  if (content.charAt(0) !== "!") {
    return;
  }

  // send message for particular sdorica hero character
  if (splitContent.length >= 2) {
    const mappedNamesArray = mapCharacterNames(splitContent);
    const name = mappedNamesArray[0].replace("!", "").toLowerCase();
    const type = mappedNamesArray[1].toLowerCase();
    const joinedMessage = `${name} ${type}`;
    if (searchPointer.contains(joinedMessage)) {
      sendMessage(characterMap[name][joinedMessage], message);
    }
  }
});

client.login(settings.token);

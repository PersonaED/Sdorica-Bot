import buckets from 'buckets-js';
import { getRandomInt } from './helper.js';
import {
  angelia,
  aosta,
  crushfang,
  dylan,
  hestia,
  experiment,
  yamitsuki,
  yanbo,
} from './assets';
import settings from './settings'
import { mapCharacterNames } from './commandMap';

const Discord = require("discord.js");
const client = new Discord.Client();
const validTiers = ['n', 'r', 'sr', 'ssr'];
const validInfuse = ['n', 'r', 'sr'];
const characterMap = {
  angelia,
  aosta,
  crushfang,
  dylan,
  hestia,
  experiment,
  yamitsuki,
  "yan-bo": yanbo,
};

// Comparison function used for BST
const compare = (a, b) => {
  if (a < b) {
     return -1;
  } if (a > b) {
     return 1;
  }
  return 0;
}

// BST to store valid commands for characters
const searchPointer = new buckets.BSTree(compare);
Object.keys(characterMap).forEach((characterInfo) => {
  const charType = Object.keys(characterMap[characterInfo]);
  charType.forEach((keyName) => {
    searchPointer.add(keyName);
  })
})

// Array of valid infuse characters (N, R, SR)
const infuseCharacters = [];
searchPointer.forEach((character) => {
  const charactersSplit = character.split(" ");
  if (validInfuse.includes(charactersSplit[1].toLowerCase())) {
    infuseCharacters.push(character);
  }
});

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
  } else {
    // check if missing the n/r/sr/srr/skin/sp part
    // does not check if second param is incorrectly named
    const mappedNamesArray = mapCharacterNames(splitContent);
    const name = mappedNamesArray[0].replace("!", "").toLowerCase();
    const charactersArray = Object.keys(characterMap);

    if (charactersArray.includes(name)) {
      message.channel.send(`Enter in a tier of n/r/sr/ssr/skin/sp. \n\nExample: !${name} ssr`);
    }
  }

  if (splitContent[0] === "!summon" || splitContent[0] === "!infuse") {
    const numberRan = getRandomInt(0, infuseCharacters.length);
    const selectedChar = infuseCharacters[numberRan];
    const splitChar = selectedChar.split(" ");
    sendMessage(characterMap[splitChar[0]][selectedChar], message);
  }
});

client.login(settings.token);

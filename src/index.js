import { angelia } from './assets';
import settings from './settings'

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

const sendMessage = (characterInfo, message) => {
  const { tier, block } = characterInfo;
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
          "name": "Passive: ",
          "value": characterInfo.passive || '-'
        },
        {
          "name": "Advisor Skill:",
          "value": characterInfo.advisor || '-'
        },
        {
          "name": "1B:",
          "value": characterInfo["1B"] || '-'
        },
        {
          "name": "2B:",
          "value": characterInfo["2B"] || '-'
        },
        {
          "name": "4B",
          "value": characterInfo["4B"] || '-'
        }
      ]
    }
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
      case 'n': {
        messageTemplate.embed.author.icon_url = "https://i.imgur.com/8deb9BH.png";
        break;
      }
      case 'r': {
        messageTemplate.embed.author.icon_url = "https://i.imgur.com/2zOUJmF.png";
        break;
      }
      case 'sr': {
        messageTemplate.embed.author.icon_url = "https://i.imgur.com/8xIe2Iv.png";
        break;
      }
      case 'ssr': {
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

  console.log(Object.keys(angelia));

  if (content.startsWith("!angelia n")) {
    sendMessage(angelia["angelia n"], message);
  }
  if (content.startsWith("!angelia r")) {
    sendMessage(angelia["angelia r"], message);
  }
  if (content.startsWith("!angelia sr")) {
    sendMessage(angelia["angelia sr"], message);
  }
  if (content.startsWith("!angelia ssr")) {
    sendMessage(angelia["angelia ssr"], message);
  }
  if (content.startsWith("!angelia skin")) {
    sendMessage(angelia["angelia skin"], message);
  }


});

client.login(settings.token);

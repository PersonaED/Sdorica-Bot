import { angelia } from './assets';
import settings from './settings'

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

const sendMessage = (characterInfo, message) => {
  message.channel.send({
    "embed": {
      "color": 16777215,
      "thumbnail": {
        "url": characterInfo.sprite || '-'
      },
      "author": {
        "name": characterInfo.name || '-',
        "icon_url": "https://i.imgur.com/U1PAqYL.png" || '-'
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
  });
}

client.on("message", (message) => {
  const { content } = message;

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

  // if (content.startsWith("!angelian")) {
  //   message.channel.send({
  //     "embed": {
  //       "color": 16777215,
  //       "thumbnail": {
  //         "url": "https://i.imgur.com/sT1bN2g.png"
  //       },
  //       "author": {
  //         "name": "Angelia N: Thy Fair Lady",
  //         "icon_url": "https://i.imgur.com/U1PAqYL.png"
  //       },
  //       "fields": [
  //         {
  //           "name": "Passive: ",
  //           "value": "-"
  //         },
  //         {
  //           "name": "Advisor Skill:",
  //           "value": "Grant front row ally (x 0.6) Armor (CD: 3)"
  //         },
  //         {
  //           "name": "1B:",
  //           "value": "Grant front row ally (x 0.6) Armor, trigger 1 block skill"
  //         },
  //         {
  //           "name": "2B:",
  //           "value": "Grant all allies (x0.72) Armor"
  //         },
  //         {
  //           "name": "4B",
  //           "value": "Heal (Attack power Icon x 1.8) front row ally",
  //           "inline": true
  //         }
  //       ]
  //     }
  //   });
  // }
  //
  // if (message.content.startsWith("!sdoricabothelp")) {
  //   message.channel.send("made by karen with love");
  // }

});

client.login(settings.token);

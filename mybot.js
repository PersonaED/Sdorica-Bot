const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!angelian")) {
    message.channel.send({
  "embed": {

    "url": "https://discordapp.com",
    "color": 16777215,

    "thumbnail": {
      "url": "https://i.imgur.com/sT1bN2g.png"
    },
    "author": {
      "name": "Angelia N: Thy Fair Lady",
      "icon_url": "https://i.imgur.com/U1PAqYL.png"
    },
    "fields": [
      {
        "name": "Passive: ",
        "value": "-"
      },
      {
        "name": "Advisor Skill:",
        "value": "Grant front row ally (x 0.6) Armor (CD: 3)"
      },
      {
        "name": "1B:",
        "value": "Grant front row ally (x 0.6) Armor, trigger 1 block skill"
      },
      {
        "name": "2B:",
        "value": "Grant all allies (x0.72) Armor"
      },
      {
        "name": "4B",
        "value": "Heal (Attack power Icon x 1.8) front row ally",
        "inline": true
      }
    ]
  }
});
  }

  if (message.content.startsWith("!sdoricabothelp")) {
    message.channel.send("made by karen with love");
  }

});






client.login("NDI2MjM5MTE0MjY2ODA0MjI0.DZYDYw.mzxBDabB4M50hX0SgBxmsEbyFPc");

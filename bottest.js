const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDI2MjM5MTE0MjY2ODA0MjI0.DZYDYw.mzxBDabB4M50hX0SgBxmsEbyFPc");

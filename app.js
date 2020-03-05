const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();

bot.on("ready", () => {
	bot.user.setPresence({game:{name:'hi'},status:'online'});
  const channel = bot.channels.get("685015735327916054");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    // Yay, it worked!
    console.log("Successfully connected.");
  }).catch(e => {
    // Oh no, it errored! Let's log it to console :)
    console.error(e);
  });
});

bot.on('message', message => {

  if (message.channel.id === "570893293832110100") {
    if (message.member.user.tag!="實驗室機械人#4048") {
      if (message.content.includes("hi")||message.content.includes("多多指教")||message.content.includes("大家好")||message.content.includes("小弟")||message.content.includes("早晨")||message.content.includes("好")||message.content.includes("係")||message.content.includes("叫")||message.content.includes("名")) {
        var role =message.guild.roles.find(role => role.id=="624457036930875404");
        message.member.addRole(role);
        message.channel.send("嗨"+message.member+"，我係實驗室機械人, 多多指教,己開放語音頻道給你使用");
      }
    }
          }
});

bot.login(config.token);

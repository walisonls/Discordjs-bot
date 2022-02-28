const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs')
const path = require('path');

dotenv.config();

const bot = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ] 
});

const commandsFiles = fs.readdirSync(path.join(__dirname, "/commands")).filter(filename => filename.endWith(".js"))

bot.commands = new Discord.Collection();

//start log
bot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//coletando TOKEN
bot.login(process.env.TOKEN);
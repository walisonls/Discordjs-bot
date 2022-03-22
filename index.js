const Discord = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();
const prefix = ".";

const bot = new Discord.Client({ 
  intents: [ 'DIRECT_MESSAGES', 'GUILD_MESSAGES' ]
});


//start log
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg)=>{
  if(!msg.content.startsWith(prefix) || msg.author.bot) return;
});

bot.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});


//coletando TOKEN
bot.login(process.env.TOKEN);
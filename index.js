const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ] 
});

/*start log
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});*/

//set the prefix
const prefix = ".";
client.on("messageCreate", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
    //ping
    if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send(`Bot Connected!
**Tag**: ${client.user.tag}
**ID**: ${client.user.id}`);
  }
});

client.login(process.env.TOKEN);
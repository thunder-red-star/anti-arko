// Message logger selfbot (Discord)
const Discord = require('djs-self');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});


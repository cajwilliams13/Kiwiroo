const fs = require('fs');
const Discord = require('discord.js');
const {token} = require('./config.json');
const botconfig = require('./config.json')

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Started!');
});

client.on('message', message => {
	let prefix = botconfig.prefix;

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(' ');
	const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return console.log(commandName);

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
	
    if (command.args && !args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

	try {
		command.execute(message, args);
    }
    
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
	
	
});

client.login(token);
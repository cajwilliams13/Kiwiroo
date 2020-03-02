const fs = require('fs');
const Discord = require('discord.js');
const {token} = require('./config.json');
const botconfig = require('./config.json')
const sqlite3 = require(`sqlite3`)
const client = new Discord.Client();
client.commands = new Discord.Collection();
let  db = new sqlite3.Database('./characters.db', () => {
	db.run(`CREATE TABLE IF NOT EXISTS Characters (
		Name Varchar(32) PRIMARY KEY,
		Bio Text,
		HP Text,
		User Text,
		Creator Text,
		Passive Text,
		PFireName Text,
		PFireDesc Text,
		PFireDamage Text,
		PFireCooldown Text,
		AltFireName Text,
		AltFireDesc Text,
		AltFireDamage Text,
		AltFireCooldown Text,
		FFireName Text,
		FFireDesc Text,
		FFireDamage Text,
		FFireCooldown Text,
		QFireName Text,
		QFireDesc Text,
		QFireDamage Text,
		QFireCooldown Text,
		UltFireName Text,
		UltFireDesc Text,
		UltFireDamage Text,
		UltFireCooldown Text,
		Image Text,
		Thumbnail Text
	);`);
	db.run(`CREATE TABLE IF NOT EXISTS Progress (
		ID int PRIMARY KEY,
		Progress int,
		Name Varchar(32)
	)`)
});
const questions = [
	"What is their bio?", "What is their max HP?", "What is their Passive?",
	"What is their primary fire's name?", "What is their primary fire's description?", "What is their primary fire's damage?", "What is their primary fire's cooldown?",
	"What is their alt fire's name?", "What is their alt fire's description?", "What is their alt fire's damage?", "What is their alt fire's cooldown?",
	"What is their (F) 1st ability's name?", "What is their (F) 1st ability's description?", "What is their (F) 1st ability's damage?", "What is their (F) 1st ability's cooldown?",
	"What is their (Q) 2nd ability's name?", "What is their (Q) 2nd ability's description?", "What is their (Q) 2nd ability's damage?", "What is their (Q) 2nd ability's cooldown?",
	"What is their Ultimate's name?", "What is their Ultimate's description?", "What is their Ultimate's effect?", "What is their Ultimate's cooldown? (15 turns unless ADMIN APPROVED)", 
	"Please send a link to a picture of your character.", "Please send a link to a thumbnail of your character.", "Thanks for creating your character. Have a nice day."

] 
const fields = [
	"Name", "Bio", "HP", "Passive", 
	"PFireName", "PFireDesc", "PFireDamage", "PFireCooldown", 
	"AltFireName", "AltFireDesc", "AltFireDamage", "AltFireCooldown", 
	"FFireName", "FFireDesc", "FFireDamage", "FFireCooldown",
	"QFireName", "QFireDesc", "QFireDamage", "QFireCooldown",
	"UltFireName", "UltFireDesc", "UltFireDamage", "UltFireCooldown",
	"Image", "Thumbnail"
]
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log("Ready!")
	client.user.setPresence({
        game: { 
            name: 'Becoming Self Aware: A beginner\'s guide',
            type: 'WATCHING',
		},
	});
});
function ProgressCheck(message) {
	const sender = message.author.id
	return new Promise((resolve) => {
		db.get(`SELECT * from Progress WHERE ID=?`, [sender], (err, row) => {
			if (row !== undefined) {
				resolve({HasStarted: true, Completion: row.Progress, name: row.Name, error: err})
			} else {
				resolve({HasStarted: false})
			}
	});
		})
}
function runSQL(sqlCmd, attrs){
	if(attrs){
		console.log('SQL cmd running:',sqlCmd,attrs);
	}else {
		console.log('SQL cmd running:',sqlCmd);
	}

	return new Promise(res => {
		if(attrs){
			db.run(sqlCmd, attrs, (err) => {
				if(err){
					console.error(err);
				}
				res();
			});
		}else {
			db.run(sqlCmd, (err) => {
				if(err){
					console.error(err);
				}
				res();
			});
		}
	})
}

client.on('message', message  => {
	if (message.author.bot) {return};
	ProgressCheck(message).then(async (data) => {
		if (data.HasStarted) {
			if (data.Completion === 0) {
				await runSQL(`INSERT INTO characters (Name, User, Creator) VALUES (?,?,?);`, [message.content, message.author.id, message.author.id]);
				await runSQL(`UPDATE Progress SET Name = ? WHERE ID = ?`, [message.content, message.author.id])
			} else if (data.error) {
				message.channel.send(`There appears to have been an error. Please contact Cajwill for help.`)
			} else {
				await runSQL(`UPDATE Characters SET ${fields[data.Completion]}=? WHERE Name=?`, [message.content, data.name])
			}
			message.channel.send(questions[data.Completion])
			var update = data.Completion + 1
			if (update === 26) {
				await runSQL(`DELETE FROM Progress WHERE ID = ?`, [message.author.id])
			}
			else {
			await runSQL(`UPDATE Progress SET Progress=? WHERE ID = ?`, [update, message.author.id])
			}
		} else {
			if (message.content.toLowerCase().includes("uwu")) {
				message.channel.send("OwO What's this?\nUwU!")
			}
			let prefix = botconfig.prefix;

			if (!message.content.startsWith(prefix)) return;

			const args = message.content.slice(prefix.length).split(' ');
			const commandName = args.shift().toLowerCase();

			const command = client.commands.get(commandName)
				|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

			if (!command) return
			if (message.content == (prefix)) return

			if (command.guildOnly && message.channel.type !== 'text') {
				return message.reply('I can\'t execute that command inside DMs!');
			}

			if (command.args && !args.length) {
				return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
			}

			try {
				command.execute(message, args, db);
				
			}

			catch (error) {
				console.error(error);
				message.reply('there was an error trying to execute that command!');
			}
		}
	})
});

client.login(token);
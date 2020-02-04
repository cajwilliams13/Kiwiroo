const fs = require('fs');
module.exports = {
    name: "name",
    aliases: "fullname",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`What is your character's full name?`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/name.txt`, a, (err) => {
            if (err) {
                console.log(err)
                message.channel.send("There was an issue detected when writing to that file. Do you have the correct name?")
                console.log(`Failure [name]`)
            } else {
                console.log(`Success [name] - ${name}`)
            message.channel.send(`Thank you for inputting ${name}'s full name. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            }
            })
        })          
    },
}; 
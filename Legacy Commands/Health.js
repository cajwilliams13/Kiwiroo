const fs = require('fs');
module.exports = {
    name: "health",
    aliases: "hp",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`What is your character's max hp?`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/hp.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [hp]`)
            message.channel.send(`Thank you for inputting ${name}'s max hp. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
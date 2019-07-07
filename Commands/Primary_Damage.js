const fs = require('fs');
module.exports = {
    name: "primarydps",
    aliases: "pdps, primdps",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the damage of your primary [per shot]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/pdps.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [pdps]`)
            message.channel.send(`Thank you for inputting ${name}'s primary fire damage. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
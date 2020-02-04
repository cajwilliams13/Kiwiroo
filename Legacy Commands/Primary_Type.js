const fs = require('fs');
module.exports = {
    name: "primarytype  ",
    aliases: "ptype, primtype",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`What type of move is your primary? [direct damage, blast damage, etc (ask an admin for the list)]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/ptype.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [ptype]`)
            message.channel.send(`Thank you for inputting ${name}'s primary fire type. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
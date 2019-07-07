const fs = require('fs');
module.exports = {
    name: "alternateeffect",
    aliases: "alteffect",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`What is the effect of your Alt-Fire? [+/-roll amount and to which roll. use "None" if no effect.]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/alteffect.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [alteffect]`)
            message.channel.send(`Thank you for inputting ${name}'s alternate fire effect. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
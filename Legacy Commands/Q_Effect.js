const fs = require('fs');
module.exports = {
    name: "ability2effect",
    aliases: "qeffect",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`What is the effect of your 2nd Ability [Q]? [+/-roll amount and to which roll. use "None" if no effect]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/qeffect.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [qeffect]`)
            message.channel.send(`Thank you for inputting ${name}'s 2nd Ability effect. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
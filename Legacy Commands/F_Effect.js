const fs = require('fs');
module.exports = {
    name: "ability1effect",
    aliases: "feffect",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`What is the effect of your 1st Ability [F]? [+/-roll amount and to which roll. use "None" if no effect]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/feffect.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [feffect]`)
            message.channel.send(`Thank you for inputting ${name}'s 1st Ability effect. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
const fs = require('fs');
module.exports = {
    name: "primarycooldown",
    aliases: "pcool, primcool, pcooldown, primcooldown, primarycool",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the cooldown of your Primary [use 'None' if no cooldown]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/pcool.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [pcool]`)
            message.channel.send(`Thank you for inputting ${name}'s primary fire cooldown. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
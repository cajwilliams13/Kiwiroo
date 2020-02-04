const fs = require('fs');
module.exports = {
    name: "ability2cooldown",
    aliases: "qcool, abi2cool, qcooldown, abi2cooldown, ability2cool",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the cooldown of your 2nd Ability [Q] [use 'None' if no cooldown]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/qcool.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [qcool]`)
            message.channel.send(`Thank you for inputting ${name}'s 2nd Ability cooldown. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
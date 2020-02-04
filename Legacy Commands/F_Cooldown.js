const fs = require('fs');
module.exports = {
    name: "ability1cooldown",
    aliases: "fcool, abi1cool, fcooldown, abi1cooldown, ability1cool",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the cooldown of your 1st Ability [F] [use 'None' if no cooldown]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/fcool.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [fcool]`)
            message.channel.send(`Thank you for inputting ${name}'s 1st Ability cooldown. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
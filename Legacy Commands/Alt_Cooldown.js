const fs = require('fs');
module.exports = {
    name: "alternatecooldown",
    aliases: "altcool, altcooldown, alternatecool",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the cooldown of your Alt-Fire [use 'None' if no cooldown]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/altcool.txt`, a, (err) => {
            if (err) {
                console.log(err)
                message.channel.send("There was an issue detected when writing to that file. Do you have the correct name?")
                console.log(`Failure [altcool]`)
            } else {
            console.log(`Success [altcool]`)
            message.channel.send(`Thank you for inputting ${name}'s alternate fire cooldown. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            } 
        })
        })           
    },
}; 
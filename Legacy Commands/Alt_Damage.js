const fs = require('fs');
module.exports = {
    name: "alternatedps",
    aliases: "altdps",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the damage of your Alt-Fire [per shot. use "None" for no damage]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/altdps.txt`, a, (err) => {
            if (err) {
                console.log(err)
                message.channel.send("There was an issue detected when writing to that file. Do you have the correct name?")
                console.log(`Failure [altdps]`)
            } else {
            console.log(`Success [altdps] - ${name}`)
            message.channel.send(`Thank you for inputting ${name}'s alternate fire damage. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
        }
        })
        })           
    },
}; 
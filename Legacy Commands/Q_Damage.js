const fs = require('fs');
module.exports = {
    name: "ability2dps",
    aliases: "qdps, abi2dps",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the damage of your 2nd Ability [Q] [per shot. use "None" for no damage]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/qdps.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [qdps]`)
            message.channel.send(`Thank you for inputting ${name}'s 2nd Ability damage. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
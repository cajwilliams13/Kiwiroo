const fs = require('fs');
module.exports = {
    name: "ability2amount",
    aliases: "1amount, abi2amount",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please state the amount of shots/charges your 2nd Ability [Q] has`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/qamount.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [qamount]`)
            message.channel.send(`Thank you for inputting ${name}'s 2nd Ability amount. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
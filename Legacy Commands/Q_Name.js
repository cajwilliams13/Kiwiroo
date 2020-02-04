const fs = require('fs');
module.exports = {
    name: "ability2name",
    aliases: "qname, abi2name",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the name of your 2nd Ability [Q]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/qname.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [qname]`)
            message.channel.send(`Thank you for inputting ${name}'s 2nd Ability name. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
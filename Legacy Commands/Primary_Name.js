const fs = require('fs');
module.exports = {
    name: "primaryname",
    aliases: "pname, primname",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the name of your primary [left click]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/pname.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [pname]`)
            message.channel.send(`Thank you for inputting ${name}'s primary fire name. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
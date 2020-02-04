const fs = require('fs');
module.exports = {
    name: "alternatedesc",
    aliases: "altdesc",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the descrption of your Alt-Fire [left click]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/altdesc.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [altdesc]`)
            message.channel.send(`Thank you for inputting ${name}'s alternate fire description. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
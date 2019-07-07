const fs = require('fs');
module.exports = {
    name: "ability1desc",
    aliases: "fdesc, abi1desc",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the descrption of your 1st Ability [F]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/fdesc.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [fdesc]`)
            message.channel.send(`Thank you for inputting ${name}'s 1st Ability description. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
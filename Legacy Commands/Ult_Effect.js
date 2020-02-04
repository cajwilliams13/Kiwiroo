const fs = require('fs');
module.exports = {
    name: "ultimateeffect",
    aliases: "ulteffect",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`What is the effect of your ultimate? [what does it do?]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/ulteffect.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [ulteffect]`)
            message.channel.send(`Thank you for inputting ${name}'s ultimate effect. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
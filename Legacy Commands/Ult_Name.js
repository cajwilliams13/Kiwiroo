const fs = require('fs');
module.exports = {
    name: "ultimatename",
    aliases: "ultname",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send the name of your ultimate [E]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/ultname.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [ultname]`)
            message.channel.send(`Thank you for inputting ${name}'s ultimate name. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
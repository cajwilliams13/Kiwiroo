const fs = require('fs');
module.exports = {
    name: "create",
    description: "Create a character",
    execute(message) {
            message.channel.send(`Hello and welcome to the Kiwiroo character creation system.\nWhat is the name of your character?`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
            fs.mkdir(`./Characters/${a}`, { recursive: true }, (err) => {
                console.log(`${a} has been created`)
                message.channel.send(`Thank you for creating ${a}. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
                })
            })           
    },
}

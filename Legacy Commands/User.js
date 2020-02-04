const fs = require('fs');
module.exports = {
    name: "user",
    execute(message, args) {
        var name = args[0]
        if (name === undefined) {
            message.channel.send("Please use a name after typing the command such as ~user Maeve")
        }
        message.channel.send(`Who is currently using ${name}?`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
            message.channel.send(`Thank you for inputting ${name}'s current user. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
        })           
    },
}; 
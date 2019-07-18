const fs = require('fs');
module.exports = {
    name: "alternateamount",
    aliases: "altamount",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please state the amount of shots your Alt-Fire has per round`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/altamount.txt`, a, (err) => {
            if (err) {
                console.log(err)
                message.channel.send("There was an issue detected when writing to that file. Do you have the correct name?")
                console.log(`Failure [altamount]`)
            } else{
                console.log(`Success [altamount] - ${name}`)
            message.channel.send(`Thank you for inputting ${name}'s alternate fire amount. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            }
        })
        })           
    },
}; 
const fs = require('fs');
module.exports = {
    name: "user",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Who is currently using this character?`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/user.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [user]`)
            message.channel.send(`Thank you for inputting ${name}'s current user. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
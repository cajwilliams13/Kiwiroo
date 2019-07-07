const fs = require('fs');
module.exports = {
    name: "bio",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send your bio in one message`)
    var filter = bio => bio.author.id === message.author.id
    var collector = message.channel.createMessageCollector(filter, {max: 1})
    collector.on('collect', bio => {
        fs.writeFile(`./Characters/${name}/bio.txt`, bio, (err) => {
            if (err) console.log(err)
            console.log(`Success [bio]`)
            message.channel.send(`Thank you for inputting ${name}'s bio. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
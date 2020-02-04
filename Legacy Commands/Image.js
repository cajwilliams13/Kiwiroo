const fs = require('fs');
module.exports = {
    name: "image",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send a link to an image of your character.`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/image.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [image]`)
            message.channel.send(`Thank you for inputting ${name}'s image. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
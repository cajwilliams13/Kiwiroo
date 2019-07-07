const fs = require('fs');
module.exports = {
    name: "thumbnail",
    execute(message, args) {
        var name = args[0]
        message.channel.send(`Please send a link to a headshot of your character.[e.g. https://cdn.discordapp.com/attachments/581747601418879003/583924210070716418/csm_2338_d979c3e8cb.png]`)
        var filter = a => a.author.id === message.author.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
        fs.writeFile(`./Characters/${name}/thumbnail.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [thumbnail]`)
            message.channel.send(`Thank you for inputting ${name}'s thumbnail. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
            })
        })           
    },
}; 
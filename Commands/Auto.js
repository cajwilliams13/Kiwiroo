const fs = require('fs');
module.exports = {
    name: "autocreate",
    description: "Create a character fully auto",
    execute(message) {
            var owner = message.author
            message.channel.send(`Hello and welcome to the Kiwiroo character creation system.\nWhat is the name of your character? (1 word only. use ~name for multiple names)`)
        var filter = a => a.author.id === owner.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
            fs.mkdir(`./Characters/${a}`, { recursive: true }, (err) => {
                console.log(`${a} has been created`)
                message.channel.send(`What is ${a}'s bio?`)
                var filter = b => b.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', b => {
                fs.writeFile(`./Characters/${a}/bio.txt`, b, (err) => {
                console.log(`${a} bio complete`)
                message.channel.send(`What is ${a}'s primary fire name?`)
                var filter = c => c.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', c => {
                fs.writeFile(`./Characters/${a}/pname.txt`, c, (err) => {
                console.log(`${a} pname complete`)
                message.channel.send(`What is ${a}'s primary fire description?`)
                var filter = d => d.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', d => {
                fs.writeFile(`./Characters/${a}/pdesc.txt`, d, (err) => {
                console.log(`${a} bio complete`)
                message.channel.send(`What is ${a}'s primary fire damage? [per shot]`)
                var filter = e => e.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', e => {
                fs.writeFile(`./Characters/${a}/pdps.txt`, e, (err) => {
                console.log(`${a} bio complete`)
                message.channel.send(`How many shots does ${a}'s primary fire have? [per turn]`)
                var filter = f => f.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', f => {
                fs.writeFile(`./Characters/${a}/pamount.txt`, f, (err) => {
                console.log(`${a} bio complete`)
                message.channel.send(`What is ${a}'s primary fire cooldown? [use 'None' for no cooldown]`)
                var filter = g => g.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', g => {
                fs.writeFile(`./Characters/${a}/pcool.txt`, g, (err) => {
                console.log(`${a} bio complete`)
                message.channel.send(`What type of move is ${a}'s primary fire?`)
            })
            })
            })
            })
            })
            })
            })
            })
            })
            })
            })
            })
            });
            })           
    },
}

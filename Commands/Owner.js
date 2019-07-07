const fs = require('fs');
module.exports = {
    name: "owner",
    execute(message, args) {
        var name = args[0]
        var a = message.author
        message.channel.send(`Thank you for registering "${name}" as your created character`)
        fs.writeFile(`./Characters/${name}/owner.txt`, a, (err) => {
            if (err) console.log(err)
            console.log(`Success [owner]`)
            })         
    },
}; 
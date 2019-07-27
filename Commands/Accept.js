const fs = require('fs')
module.exports = {
    name: "accept",
    execute(message, args) {
        var name = `${args[0]}`
        var path = "./Characters"
        fs.readFile(`./Characters/${name}/owner.txt`, function(err, c) {
        var owner = c.toString();        
        fs.readdir(path, function(err, items) {
            var item = items.toString();
            var arr = item.split(",");
        if (name === "undefined") {
            message.channel.send(`Please enter a name to display. The current names are ${items}`)
        } else if (arr.includes(name)) {
            fs.writeFile(`./Characters/${name}/status.txt`, "Approved", (err) => {
                message.client.channels.get("604615487950946326").send(`${name} [created by ${owner}] has been approved by ${message.author}.`)
            })
        } else {
            message.channel.send(`Please enter a completed character's name. The current names are:\n${items}`)
        }
    });
    }); 
    } 
}
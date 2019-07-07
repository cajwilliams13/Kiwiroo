const fs = require('fs');
module.exports = {
    name: "readbio",
    aliases: "bioread",
    arge: true,
    execute(message, args) {
        var name = `${args[0]}`
        fs.readFile(`./Characters/${name}/${name}bio.txt`, function(err, buf) {
            if (err) console.log(err);
            message.reply(`Here is ${name}'s bio: \n ${buf.toString()}`)
          });
    }
}
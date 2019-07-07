const fs = require('fs');
module.exports = {
    name: "readskill",
    aliases: "skillread, skillsread, readskills",
    arge: true,
    execute(message, args) {
        var name = `${args[0]}`
        fs.readFile(`./Characters/${name}/${name}skills.txt`, function(err, buf) {
            if (err) console.log(err);
            console.log(buf.toString());
            message.reply(`Here is ${name}'s skill sheet: \n ${buf.toString()}`)
          });
    }
}
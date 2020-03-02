const fs = require('fs');
module.exports = {
    name: "create",
    description: "Create a character",
    execute(message, args, db) {
            var owner = message.author
            message.channel.send(`Hello and welcome to the Kiwiroo character creation system.\nWhat is the name of your character? (1 word only. use ~name for multiple names)`)
        var filter = a => a.author.id === owner.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
            fs.mkdir(`./Characters/${a}`, { recursive: true }, (err) => {
                console.log(`${a} has been created`)
                message.channel.send(`Thank you for creating ${a}. To continue, please type your next command followed by the name of your character e.g. ~bio maeve. Thanks, Kiwiroo`)
                fs.writeFile(`./Characters/${a}/bio.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/altamount.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/altcool.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/altdesc.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/altdps.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/alteffect.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/altname.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/alttype.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/famount.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/fcool.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/fdesc.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/fdps.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/feffect.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/fname.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/ftype.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/image.txt`, "https://cdn.discordapp.com/attachments/590329471857328188/598299083949604878/is-none-singular-or-plural-video-1753-06bba640fa47b87641138f8d2f0e600b1x.png", (err) => {
                fs.writeFile(`./Characters/${a}/name.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/owner.txt`, owner, (err) => {
                fs.writeFile(`./Characters/${a}/pamount.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/pcool.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/pdesc.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/pdps.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/pname.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/ptype.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/qamount.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/qcool.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/qdesc.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/qdps.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/qeffect.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/qname.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/qtype.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/thumbnail.txt`, "https://cdn.discordapp.com/attachments/590329471857328188/598299122361040907/515068.png", (err) => {
                fs.writeFile(`./Characters/${a}/ultdesc.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/ulteffect.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/ultname.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/ulttype.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/user.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/passive.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/hp.txt`, "N/A", (err) => {
                fs.writeFile(`./Characters/${a}/status.txt`, "Pending...", (err) => {
                });     
                });
                });
                });                                              
                });
                });
                });
                }); 
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });        
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
                });
            })           
    },
}

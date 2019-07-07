const fs = require('fs');
module.exports ={
    name: "ShowChar",
    aliases: "showchar, character, showcharacter",
    execute(message, args) {
        var name = `${args[0]}`
        fs.readFile(`./Characters/${name}/bio.txt`, function(err, a) {
            fs.readFile(`./Characters/${name}/user.txt`, function(err, b) {
            fs.readFile(`./Characters/${name}/owner.txt`, function(err, c) {
            fs.readFile(`./Characters/${name}/pname.txt`, function(err, d) {
            fs.readFile(`./Characters/${name}/pdesc.txt`, function(err, e) {
            fs.readFile(`./Characters/${name}/pdps.txt`, function(err, f) {
            fs.readFile(`./Characters/${name}/pamount.txt`, function(err, g) {
            fs.readFile(`./Characters/${name}/pcool.txt`, function(err, h) {
            fs.readFile(`./Characters/${name}/ptype.txt`, function(err, i) {
            fs.readFile(`./Characters/${name}/altname.txt`, function(err, j) {
            fs.readFile(`./Characters/${name}/altdesc.txt`, function(err, k) {
            fs.readFile(`./Characters/${name}/altdps.txt`, function(err, l) {
            fs.readFile(`./Characters/${name}/altamount.txt`, function(err, m) {
            fs.readFile(`./Characters/${name}/altcool.txt`, function(err, n) {
            fs.readFile(`./Characters/${name}/alttype.txt`, function(err, o) {    
            fs.readFile(`./Characters/${name}/alteffect.txt`, function(err, p) {      
                const bio = a.toString();
                const user = b.toString();
                const owner = c.toString();
                const pname = d.toString();
                const pdesc = e.toString();
                const pdps = f.toString();
                const pamount = g.toString();
                const pcool = h.toString();
                const ptype = i.toString();
                const altname = j.toString();
                const altdesc = k.toString();
                const altdps = l.toString();
                const altamount = m.toString();
                const altcool = n.toString();
                const alttype = o.toString();
                const alteffect = p.toString();

        Character = {
            color: 0x0099ff,
            title: 'In use by:',
            author: {
                name: `${name}`,
                icon_url: 'https://cdn.discordapp.com/attachments/581747601418879003/583928183791812608/KiwiRoo.jpg',
            },
            description: `
            Owner: ${owner}
            Current User: ${user}`,
            thumbnail: {
                url: 'https://cdn.discordapp.com/attachments/581747601418879003/583924210070716418/csm_2338_d979c3e8cb.png',
            },
            fields: [
                {
                    name: 'Bio:',
                    value: bio,
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                },
                {
                    name: 'Primary Fire:',
                    value: `
                    Name: ${pname}
                    Description: ${pdesc}
                    Details:
                    - Type: ${ptype}
                    - Cooldown: ${pcool}
                    - Damage: ${pdps}
                    - Amount: ${pamount}`,
                    inline: true,
                },
                {
                    name: 'Alternate Fire:',
                    value: `
                    Name: ${altname}
                    Description: ${altdesc}
                    Details:
                    - Type: ${alttype}
                    - Cooldown: ${altcool}
                    - Damage: ${altdps}
                    - Amount: ${altamount}
                    - Effect: ${alteffect}`,
                    inline: true,
                },
                {
                    name: 'Ability 1:',
                    value: `
                    Name: [Ability name]
                    Type: [Type of move]
                    Effect: [Ability effect (damage, heaing etc)]
                    Cooldown: [Ability Cooldown]`,
                    inline: true,
                },
                {
                    name: 'Ability 2:',
                    value: `
                    Name: [Ability name]
                    Type: [Type of move]
                    Effect: [Ability effect (damage, heaing etc)]
                    Cooldown: [Ability Cooldown]`,
                    inline: true,
                },
                {
                    name: 'Ultimate:',
                    value: `
                    Name: [Ultimate name]
                    Type: [Type of move]
                    Effect: [Ultimate effect (damage, heaing etc)]
                    Cooldown: 15 turns (standard for all ultimates unless we change charge rates)`,
                    inline: true,
                },
            ],
            image: {
                url: 'https://cdn.discordapp.com/attachments/581747601418879003/583927963104575488/Maeve.png',
            },
            timestamp: new Date(),
            footer: {
                text: `Created by kiwiroo. Coded by "Catwill"`,
                icon_url: 'https://cdn.discordapp.com/attachments/581747601418879003/583928183791812608/KiwiRoo.jpg',
            },
        };
        message.channel.send({ embed: Character });
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
    }
}
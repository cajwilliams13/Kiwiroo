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
            fs.readFile(`./Characters/${name}/fname.txt`, function(err, q) {
            fs.readFile(`./Characters/${name}/fdesc.txt`, function(err, r) {
            fs.readFile(`./Characters/${name}/fdps.txt`, function(err, s) {
            fs.readFile(`./Characters/${name}/famount.txt`, function(err, t) {
            fs.readFile(`./Characters/${name}/fcool.txt`, function(err, u) {
            fs.readFile(`./Characters/${name}/ftype.txt`, function(err, v) {    
            fs.readFile(`./Characters/${name}/feffect.txt`, function(err, w) {
            fs.readFile(`./Characters/${name}/qname.txt`, function(err, x) {
            fs.readFile(`./Characters/${name}/qdesc.txt`, function(err, y) {
            fs.readFile(`./Characters/${name}/qdps.txt`, function(err, z) {
            fs.readFile(`./Characters/${name}/qamount.txt`, function(err, aa) {
            fs.readFile(`./Characters/${name}/qcool.txt`, function(err, bb) {
            fs.readFile(`./Characters/${name}/qtype.txt`, function(err, cc) {    
            fs.readFile(`./Characters/${name}/qeffect.txt`, function(err, dd) {     
            fs.readFile(`./Characters/${name}/ultname.txt`, function(err, ee) {
            fs.readFile(`./Characters/${name}/ulttype.txt`, function(err, ff) {    
            fs.readFile(`./Characters/${name}/ulteffect.txt`, function(err, gg) {
            fs.readFile(`./Characters/${name}/ultdesc.txt`, function(err, hh) {
            fs.readFile(`./Characters/${name}/image.txt`, function(err, ii) {
            fs.readFile(`./Characters/${name}/thumbnail.txt`, function(err, jj) {    
            fs.readFile(`./Characters/${name}/name.txt`, function(err, kk) {
            fs.readFile(`./Characters/${name}/passive.txt`, function(err, ll) {
            fs.readFile(`./Characters/${name}/hp.txt`, function(err, mm) {            
                
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
                const fname = q.toString();
                const fdesc = r.toString();
                const fdps = s.toString();
                const famount = t.toString();
                const fcool = u.toString();
                const ftype = v.toString();
                const feffect = w.toString();
                const qname = x.toString();
                const qdesc = y.toString();
                const qdps = z.toString();
                const qamount = aa.toString();
                const qcool = bb.toString();
                const qtype = cc.toString();
                const qeffect = dd.toString();
                const ultname = ee.toString();
                const ulttype = ff.toString();
                const ulteffect = gg.toString();
                const ultdesc = hh.toString();
                const image = ii.toString();
                const thumbnail = jj.toString();
                const fullname = kk.toString();
                const passive = ll.toString();
                const hp = mm.toString();

        Character = {
            color: 0x0099ff,
            title: 'In use by:',
            author: {
                name: `${fullname}`,
                icon_url: 'https://cdn.discordapp.com/attachments/581747601418879003/583928183791812608/KiwiRoo.jpg',
            },
            description: `
            Owner: ${owner}
            Current User: ${user}`,
            thumbnail: {
                url: `${thumbnail}`,
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
                    name: 'Passive:',
                    value: passive,
                },
                {
                    name: 'Health:',
                    value: hp,
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
                    Name: ${fname}
                    Description: ${fdesc}
                    Details:
                    - Type: ${ftype}
                    - Cooldown: ${fcool}
                    - Damage: ${fdps}
                    - Amount: ${famount}
                    - Effect: ${feffect}`,
                    inline: true,
                },
                {
                    name: 'Ability 2:',
                    value: `
                    Name: ${qname}
                    Description: ${qdesc}
                    Details:
                    - Type: ${qtype}
                    - Cooldown: ${qcool}
                    - Damage: ${qdps}
                    - Amount: ${qamount}
                    - Effect: ${qeffect}`,
                    inline: true,
                },
                {
                    name: 'Ultimate:',
                    value: `
                    Name: ${ultname}
                    Description: ${ultdesc}
                    Details:
                    - Type: ${ulttype}
                    - Effect: ${ulteffect}
                    - Cooldown: 15 turns`,
                    inline: true,
                },
            ],
            image: {
                url: `${image}`,
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
    }
}
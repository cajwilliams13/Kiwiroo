const fs = require('fs');
module.exports = {
    name: "autocreate",
    description: "Create a character fully auto",
    execute(message) {
            var owner = message.author
            message.channel.send(`Hello and welcome to the Kiwiroo character creation system.\nWhat is the name of your character? (1 word only please.)`)
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
                message.channel.send(`What is ${a}'s primary fire name?`)
                //primary-fire
                var filter = c => c.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', c => {
                fs.writeFile(`./Characters/${a}/pname.txt`, c, (err) => {
                message.channel.send(`What is ${a}'s primary fire description?`)
                var filter = d => d.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', d => {
                fs.writeFile(`./Characters/${a}/pdesc.txt`, d, (err) => {
                message.channel.send(`What is ${a}'s primary fire damage? [per shot]`)
                var filter = e => e.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', e => {
                fs.writeFile(`./Characters/${a}/pdps.txt`, e, (err) => {
                message.channel.send(`How many shots does ${a}'s primary fire have? [per turn]`)
                var filter = f => f.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', f => {
                fs.writeFile(`./Characters/${a}/pamount.txt`, f, (err) => {
                message.channel.send(`What is ${a}'s primary fire cooldown? [use 'None' for no cooldown]`)
                var filter = g => g.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', g => {
                fs.writeFile(`./Characters/${a}/pcool.txt`, g, (err) => {
                message.channel.send(`What type of move is ${a}'s primary fire?`)
                var filter = h => h.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', h => {
                fs.writeFile(`./Characters/${a}/ptype.txt`, h, (err) => {
                message.channel.send(`What is the name of ${a}'s alternate fire?`)
                //alt-fire
                var filter = i => i.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', i => {
                fs.writeFile(`./Characters/${a}/altname.txt`, i, (err) => {
                message.channel.send(`What is ${a}'s alternate fire description?`)
                var filter = j => j.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', j => {
                fs.writeFile(`./Characters/${a}/altdesc.txt`, j, (err) => {
                message.channel.send(`What is ${a}'s alternate fire damage? [per shot]`)
                var filter = k => k.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', k => {
                fs.writeFile(`./Characters/${a}/altdps.txt`, k, (err) => {
                message.channel.send(`How many shots does ${a}'s alternate fire have? [per turn]`)
                var filter = l => l.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', l => {
                fs.writeFile(`./Characters/${a}/altamount.txt`, l, (err) => {
                message.channel.send(`What is ${a}'s alternate fire cooldown? [use 'None' for no cooldown]`)
                var filter = m => m.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', m => {
                fs.writeFile(`./Characters/${a}/altcool.txt`, m, (err) => {
                message.channel.send(`What type of move is ${a}'s alternate fire?`)
                var filter = n => n.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', n => {
                fs.writeFile(`./Characters/${a}/alttype.txt`, n, (err) => {
                message.channel.send(`What is the effect of ${a}'s alternate fire?`)
                var filter = o => o.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', o => {
                fs.writeFile(`./Characters/${a}/alteffect.txt`, o, (err) => {
                message.channel.send(`What is the name of ${a}'s 1st ability [F]?`)
                //Ability 1
                var filter = p => p.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', p => {
                fs.writeFile(`./Characters/${a}/fname.txt`, p, (err) => {
                message.channel.send(`What is ${a}'s 1st ability [F] description?`)
                var filter = q => q.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', q => {
                fs.writeFile(`./Characters/${a}/fdesc.txt`, q, (err) => {
                message.channel.send(`What is ${a}'s 1st ability [F] damage? [per shot]`)
                var filter = r => r.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', r => {
                fs.writeFile(`./Characters/${a}/fdps.txt`, r, (err) => {
                message.channel.send(`How many shots does ${a}'s 1st ability [F] have? [per turn]`)
                var filter = s => s.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', s => {
                fs.writeFile(`./Characters/${a}/famount.txt`, s, (err) => {
                message.channel.send(`What is ${a}'s 1st ability [F] cooldown? [use 'None' for no cooldown]`)
                var filter = t => t.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', t => {
                fs.writeFile(`./Characters/${a}/fcool.txt`, t, (err) => {
                message.channel.send(`What type of move is ${a}'s 1st ability [F]?`)
                var filter = u => u.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', u => {
                fs.writeFile(`./Characters/${a}/ftype.txt`, u, (err) => {
                message.channel.send(`What is the effect of ${a}'s 1st ability [F]?`)
                var filter = v => v.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', v => {  
                fs.writeFile(`./Characters/${a}/feffect.txt`, v, (err) => {
                message.channel.send(`What is the name of ${a}'s 2nd ability [Q]?`)
                //Ability 2
                var filter = w => w.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', w => {
                fs.writeFile(`./Characters/${a}/qname.txt`, w, (err) => {
                message.channel.send(`What is ${a}'s 2nd ability [Q] description?`)
                var filter = x => x.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', x => {
                fs.writeFile(`./Characters/${a}/qdesc.txt`, x, (err) => {
                message.channel.send(`What is ${a}'s 2nd ability [Q] damage? [per shot]`)
                var filter = y => y.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', y => {
                fs.writeFile(`./Characters/${a}/qdps.txt`, y, (err) => {
                message.channel.send(`How many shots does ${a}'s 2nd ability [Q] have? [per turn]`)
                var filter = z => z.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', z => {
                fs.writeFile(`./Characters/${a}/qamount.txt`, z, (err) => {
                message.channel.send(`What is ${a}'s 2nd ability [Q] cooldown? [use 'None' for no cooldown]`)
                var filter = aa => aa.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', aa => {
                fs.writeFile(`./Characters/${a}/qcool.txt`, aa, (err) => {
                message.channel.send(`What type of move is ${a}'s 2nd ability [Q]?`)
                var filter = bb => bb.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', bb => {
                fs.writeFile(`./Characters/${a}/qtype.txt`, bb, (err) => {
                message.channel.send(`What is the effect of ${a}'s 2nd ability [Q]?`)
                var filter = cc => cc.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', cc => {
                fs.writeFile(`./Characters/${a}/qeffect.txt`, cc, (err) => {
                message.channel.send(`What is the name of ${a}'s Ultimate [E]?`)
                //Ultimate
                var filter = dd => dd.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', dd => {
                fs.writeFile(`./Characters/${a}/ultname.txt`, dd, (err) => {
                message.channel.send(`What is ${a}'s Ultimate [E] description?`)
                var filter = ee => ee.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', ee => {
                fs.writeFile(`./Characters/${a}/ultdesc.txt`, ee, (err) => {
                message.channel.send(`What type of move is ${a}'s Ultimate [E]?`)
                var filter = ff => ff.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', ff => {
                fs.writeFile(`./Characters/${a}/ulttype.txt`, ff, (err) => {
                message.channel.send(`What is the effect of ${a}'s Ultimate [E]?`)
                var filter = gg => gg.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', gg => {
                fs.writeFile(`./Characters/${a}/ulteffect.txt`, gg, (err) => {
                message.channel.send(`What is ${a}'s full name?`)
                //other
                var filter = hh => hh.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', hh => {
                fs.writeFile(`./Characters/${a}/name.txt`, hh, (err) => {
                message.channel.send(`What is ${a}'s passive? [Use 'None' if no passive]`)
                var filter = ii => ii.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', ii => {
                fs.writeFile(`./Characters/${a}/passive.txt`, ii, (err) => {
                message.channel.send(`What is ${a}'s max HP?`)
                var filter = jj => jj.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', jj => {
                fs.writeFile(`./Characters/${a}/hp.txt`, jj, (err) => {
                message.channel.send(`Please send a link to an image of your character.`)
                var filter = kk => kk.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', kk => {
                fs.writeFile(`./Characters/${a}/image.txt`, kk, (err) => {
                message.channel.send(`Please send a link to a headshot of your character.[e.g. https://cdn.discordapp.com/attachments/581747601418879003/583924210070716418/csm_2338_d979c3e8cb.png]`)
                var filter = ll => ll.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', ll => {
                fs.writeFile(`./Characters/${a}/thumbnail.txt`, ll, (err) => {
                message.channel.send(`Who is currently using this character?`)
                var filter = mm => mm.author.id === owner.id
                var collector = message.channel.createMessageCollector(filter, {max: 1})
                collector.on('collect', mm => {
                fs.writeFile(`./Characters/${a}/user.txt`, mm, (err) => {
                message.channel.send(`Finishing up... Please stand by...`)
                message.channel.startTyping();
                fs.writeFile(`./Characters/${a}/owner.txt`, owner, (err) => {
                fs.writeFile(`./Characters/${a}/status.txt`, "Pending...", (err) => {
                    function endtype() {
                        message.channel.stopTyping(true);
                        message.channel.send(`${a} has been completed.\nUse ~character <name> to view the finished product and use ~approve <name> to send the OC off to be approved by the admins. Thanks, Kiwiroo.`)
    
                    }
                    setTimeout(endtype, 10000)
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

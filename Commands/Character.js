const fs = require('fs');
module.exports ={
    name: "character",
    aliases: "char",
    execute(message, args, db) {
        const messagesent = message.content
        const listed = messagesent.split(`"`)
        var CharName = listed[1]
        function GetChar() {
            return new Promise((resolve) => {
                db.get(`SELECT * from Characters WHERE Name=?`, [CharName], (err, row) => {
                    if (row !== undefined) {
                        resolve({HasChar: true, row: row})
                    } else {
                        resolve({HasChar: false})
                    }
            });
                })
        }
        GetChar().then(async (data) => {
            info = data.row
            if (data.HasChar) {
                Character = {
                    color: 0x0099ff,
                    title: 'In use by:',
                    author: {
                        name: `${info.Name}`,
                        icon_url: 'https://cdn.discordapp.com/avatars/566151452762832906/5a058091cd4594d643d57318f6f1a043.png',
                    },
                    description: `
                    Owner: <@${info.Creator}>
                    Current User: <@${info.User}>`,
                    thumbnail: {
                        url: `${info.Thumbnail}`,
                    },
                    fields: [
                        {
                            name: 'Bio:',
                            value: info.Bio,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                        },
                        {
                            name: 'Passive:',
                            value: info.Passive,
                        },
                        {
                            name: 'Health:',
                            value: info.HP,
                        },
                        {
                            name: 'Primary Fire:',
                            value: `
                            Name: ${info.PFireName}
                            Description: ${info.PFireDesc}
                            Details:
                            - Cooldown: ${info.PFireCooldown}
                            - Damage: ${info.PFireDamage}`,
                            inline: true,
                        },
                        {
                            name: 'Alternate Fire:',
                            value: `
                            Name: ${info.AltFireName}
                            Description: ${info.AltFireDesc}
                            Details:
                            - Cooldown: ${info.AltFireCooldown}
                            - Damage: ${info.AltFireDamage}`,
                            inline: true,
                        },
                        {
                            name: 'Ability 1:',
                            value: `
                            Name: ${info.FFireName}
                            Description: ${info.FFireDesc}
                            Details:
                            - Cooldown: ${info.FFireCooldown}
                            - Damage: ${info.FFireDamage}`,
                            inline: true,
                        },
                        {
                            name: 'Ability 2:',
                            value: `
                            Name: ${info.QFireName}
                            Description: ${info.QFireDesc}
                            Details:
                            - Cooldown: ${info.QFireCooldown}
                            - Damage: ${info.QFireDamage}`,
                            inline: true,
                        },
                        {
                            name: 'Ultimate:',
                            value: `
                            Name: ${info.UltFireName}
                            Description: ${info.UltFireDesc}
                            Details:
                            - Cooldown: ${info.UltFireCooldown}
                            - Effect: ${info.UltFireDamage}`,
                            inline: true,
                        },
                    ],
                    image: {
                        url: `${info.Image}`,
                    },
                    timestamp: new Date(),
                    footer: {
                        text: `Created by Kiwiroo. Coded by "Catwill".`,
                        icon_url: 'https://cdn.discordapp.com/avatars/566151452762832906/5a058091cd4594d643d57318f6f1a043.png',
                    },
                };
                message.channel.send({ embed: Character });
            }
            else {
                return
            }
        })
    }
}
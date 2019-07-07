module.exports ={
    name: "demoembed",
    execute(message, args) {
        exampleEmbed = {
            color: 0x0099ff,
            title: 'In use by:',
            author: {
                name: 'Maeve',
                icon_url: 'https://cdn.discordapp.com/attachments/581747601418879003/583928183791812608/KiwiRoo.jpg',
            },
            description: '[Owner/user of character]',
            thumbnail: {
                url: 'https://cdn.discordapp.com/attachments/581747601418879003/583924210070716418/csm_2338_d979c3e8cb.png',
            },
            fields: [
                {
                    name: 'Bio:',
                    value: '[Character Bio]',
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                },
                {
                    name: 'Primary Fire:',
                    value: `
                    Name: [Primary name]
                    Description: [Move Description]
                    Details:
                    - Type:
                    - Cooldown:
                    - Effect:
                    - [other details if applicable]`,
                    inline: true,
                },
                {
                    name: 'Alternate Fire:',
                    value: `
                    Name: [Alt-Fire name]
                    Type: [Type of move]
                    Effect: [Alt-Fire effect (damage, heaing etc)]
                    Cooldown: [Alt-Fire Cooldown]`,
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
                text: `Created by kiwiroo. Coded by @Cajwill#6550`,
                icon_url: 'https://cdn.discordapp.com/attachments/581747601418879003/583928183791812608/KiwiRoo.jpg',
            },
        };
        
        message.channel.send({ embed: exampleEmbed });
    }
}
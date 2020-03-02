module.exports = {
    name: "auto",
    description: "Create a character fully auto",
    execute(message,args, db) {
        const ID = message.author.id
        db.run(`INSERT INTO Progress VALUES (
            ?, 0, NULL
        )`, [ID], (err) => {
            if (err) {
                console.error(err)
                message.channel.send(`Uh Oh, Something went wrong. <@309593599341756416> your bot broke.`)
            } else {
                message.channel.send(`Welcome to Kiwiroo's character creation system. Please note that when starting this process, every message you send will be recorded as a response and it is troublesome to edit if you make a mistake. I am kiwiroo and will guide you through the process today. 
                To begin, what is your character's name?`)
            }
            
        });

    },
}

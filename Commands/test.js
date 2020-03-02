//This js file is for testing.
const fs = require('fs');
module.exports = {
    name: "test",
    execute(message, args, db) {
        function writeData(data){
            const jsoned = JSON.stringify(data);
        
            fs.writeFileSync(`./Characters/${name}.json`, jsoned);
        }
        
        function readData(){
            const data = fs.readFileSync(`./Characters/${name}.json`);
            
            return JSON.parse(data);
        }
        
        function CollectData(field) {
            const filter = input => input.author.id === owner.id
                 const collector = message.channel.createMessageCollector(filter, {max: 1})
                 collector.on('collect', input => {
                field = input
                
                })
        }
        const myData = { name: 'jon', age: 21, likes: 'potatoes' };
        const owner = message.author
        const name = myData.name
        writeData(myData);
        
        const loaded = readData();
        message.channel.send('What\'s your age?')
        var filter = a => a.author.id === owner.id
        var collector = message.channel.createMessageCollector(filter, {max: 1})
        collector.on('collect', a => {
            loaded.age = a
            writeData(loaded);
        
        
        const andAgain = readData();
        console.log(andAgain);
        message.channel.send("ok boomer")
            })   
    }
}
//This js file is for testing.
const fs = require('fs');
module.exports = {
    name: "test",
    execute(message, args) {
        function writeData(data){
            const jsoned = JSON.stringify(data);
        
            fs.writeFileSync(`./Characters/${name}.json`, jsoned);
        }
        
        function readData(){
            const data = fs.readFileSync(`./Characters/${name}.json`);
            
            return JSON.parse(data);
        }
        
        const myData = { name: 'jon', age: 21, likes: 'potatoes' };
        writeData(myData);
        
        const loaded = readData();
        loaded.age = 22;
        writeData(loaded);
        
        const andAgain = readData();
        console.log(andAgain);
        message.channel.send("ok boomer")
    }
}
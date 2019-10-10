const fs = require("fs")
module.exports = (client, message) => {
    fs.readdir('./commands/', (err, files) => {
	if (message.content.startsWith('!')){
	    console.log(message.author.username + ' sendet command "' +  message.content + '"');
	}
	files.forEach(file => {
	    if (file.indexOf('~') < 0) {
		const commandHandler = require('../commands/' + file)
		const commandName = file.split('.')[0]
		let command = message.content.split(/[ ,]+/)[0];

		if (command.toLowerCase() === ('!' + commandName.toLowerCase())){
		    return commandHandler(message)
		}
	    }
	})
    })    
}

const fs = require("fs")
module.exports = (client, message) => {
    fs.readdir('./commands/', (err, files) => {
	files.forEach(file => {
	    if (file.indexOf('~') < 0) {
		const commandHandler = require('../commands/' + file)
		const commandName = file.split('.')[0]
		let command = message.content.toLowerCase()
		if (command.startsWith('!' + commandName.toLowerCase())){
		    return commandHandler(message)
		}
	    }
	})
    })    
}

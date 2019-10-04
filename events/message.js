const Roll = require('../commands/roll')
const Log = require('../commands/log')
const Helper = require('../commands/help')
const Vote = require('../commands/vote')
const Lidl = require('../commands/lidl')
const Thai = require('../commands/thai')
const Kniffel = require('../commands/kniffel')
const Palindrom = require('../commands/palindrom')

module.exports = (client, message) => {
    if (message.content.startsWith('!Roll')){
	return Roll(message)
    }
    else if (message.content.startsWith('!Log')){
	return Log(message)
    }
    else if (message.content === '!WhatCanIDo'){
	return Helper(message)
    }
    else if (message.content.startsWith('!Print')){
	
    }
    else if (message.content.startsWith('!Vote')){
	return Vote(message)
    }
    else if (message.content.startsWith('!Lidl')){
	return Lidl(message)
    }
    else if (message.content.startsWith('!Thai')){
	return Thai(message)
    }
    else if (message.content.startsWith('!Kniffel')){
	return Kniffel(message);
    }
    else if (message.content.startsWith('!Stunden')){

    }
    else if (message.content.startsWith('!Spesen')){

    }
    else if (message.content.startsWith('!Palindrom')){
	return Palindrom(message);
    }

}

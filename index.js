/*
 TODO:
  1. Waehlen vom Azubi des Monats.
  1.1 Jeder nur einmal -> UserId merken
  1.2 Nur Member  aus den Gruppen
  2. Mittagsbestellung
  3. Role the dice
  4. Minispiele
*/


require('dotenv').config()
const fs = require('fs')
const Discord = require('discord.js')
const client  = new Discord.Client()

fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
	if (file.indexOf('~') < 0){
	    const eventHandler = require(`./events/${file}`)
	    const eventName = file.split('.')[0]
	    client.on(eventName, (...args) => eventHandler(client, ...args))
	}
  })
})

client.login(process.env.BOT_TOKEN)

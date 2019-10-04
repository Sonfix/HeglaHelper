module.exports = message => {
    let i = Math.floor(Math.random() * 100) + 1;
    if (i%2){
	if (i == 98){
	    message.reply("Oh nein! Kante!");
	    return;
	}
	message.reply("Kopf!");
    }
    else{
	if (i == 99){
	    message.reply("Oh nein! Kante!");
	    return;
	}
	message.reply("Zahl!");
    }
}

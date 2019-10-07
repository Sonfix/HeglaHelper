module.exports = message => {
    let vals = message.content.split(/[ ,]+/);
    let max = 100;
    if (vals.length >= 2){
	max = vals[1];
	if (isNaN(max)){
	    message.reply("Keine gueltige Nummer!");
	    return;
	}
	if (max <= 0){
	    message.reply("0");
	    return;
	}
    }
    message.reply(Math.floor(Math.random() * max) + 1);
}
 

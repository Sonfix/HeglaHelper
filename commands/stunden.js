module.exports = message => {
    let val = message.content.substr(message.content.indexOf(" "), message.content.length)
    if (val.indexOf(',') > 0){
	val = val.replace(',', '.');
    }
    if (isNaN(working)){
	message.reply('Bitte gib eine gueltige Zahl ein!');
	return;
    }
    let h = Math.floor(Number(val));
    let m = 60 * (((Number(val) * 100)%100)/100);
    let s = 60 * (((m*100)%100)/100);
    let msg = "";
    if (h>0){
	if (h == 1){
	    msg += h + ' Stunde ';
	}
	else {
	    msg += h + " Stunden ";
	}
    }
    if (Math.floor(m) > 0){
	if (Math.floor(m) == 1){
	    msg += Math.floor(m) + " Minute ";
	}
	else{
	    msg += Math.floor(m) + " Minuten ";
	}
    }
    if (s > 0){
	if (Math.floor(s) == 1){
	    msg += Math.floor(s) + " Sekunde";
	}
	else{
	    msg += Math.floor(s) + " Sekunden";
	}
    }
    message.reply(msg);
}

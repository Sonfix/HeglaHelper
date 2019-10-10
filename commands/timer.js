function onTimer(message) {
    message.reply('Dein Timer ist abgelaufen');
}


module.exports = message => {
    let vals = message.content.split(/[ ,]+/);
    let intervall = 0;
    if (vals.length >= 2){
	if (isNaN(vals[1])){
	    //Check entry
	    var buff = vals[1];
	    if (buff.indexOf('h') > 0){
		intervall += Number(buff.substring(0, buff.indexOf('h'))) * 60 * 60;
		buff = buff.slice(buff.indexOf('h') + 1)
	    }
	    if (buff.indexOf('m') > 0){
		intervall += Number(buff.substring(0, buff.indexOf('m'))) * 60;
		buff = buff.slice(buff.indexOf('m') + 1)
	    }
	    if (buff.indexOf('s') > 0){
		intervall += Number(buff.substring(0, buff.indexOf('s')));
	    }
	    
	    if (intervall == 0){
		message.reply('Ungueltige Eingabe!');
		return;
	    }
	}
	else{
	    intervall = Number(vals[1]) * 60;
	}
    }
    intervall = intervall  * 1000;
    var timer = setTimeout(onTimer, intervall, message);
}


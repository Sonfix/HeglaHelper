module.exports = message => {
    let val = message.content.substr(message.content.indexOf(" "), message.content.length)
    let working = val;
    if (val.indexOf(',') > 0){
	working = val.replace(',', '.');
    }
    let h = Math.floor(Number(working));
    let m = 60 * (((Number(working) * 100)%100)/100);
    let s = 60 * (((m*100)%100)/100);
    message.reply(h + ' Stunden ' + Math.floor(m) + ' Minuten und ' + s + ' Sekunden');
}

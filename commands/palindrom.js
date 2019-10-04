module.exports = message => {
    let t = "";
    if (message.content.indexOf(" ") >= 0){
	t = message.content.substr(message.content.indexOf(" "), message.content.length);
    }

    let s = t.toLowerCase().replace(/[^a-z]+/g,"");
    let p = s.split("").reverse().join("");
    if (p == s){
	message.reply(t + " ist ein Palindrom!");
    }
    else{
	message.reply(t + " ist kein Palindrom!");
    }
}

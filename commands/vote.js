const fs = require("fs")
var jsonPath = '../votes.json';
module.exports = message => {
    const member = message.mentions.members.first()
    let vals = message.content.split(/[ ,]+/);
    if(vals.length < 3){
	message.reply('Nicht genug Parameter! Bitte mindestens die Punkte anzahl angeben!');
	return;
    }
    let val = vals[2];
    let reason = " ";
    if (vals.length > 3) reason = vals[3];
    let content = fs.readFileSync(jsonPath);
    let db = JSON.parse(content);
    if (member)
    {
	let memberAlreadyExists = false;
	Object.keys(db.members).forEach(function(k){
	    if(db.members[k].ID == member.user.id){
		var obj = {};
		obj["Values"] = vals[2];
		obj["Reason"] = vals[3];
		db.members[k].Votes.push(obj);
		memberAlreadyExists = true;
	    }
	});

	if(!memberAlreadyExists)
	{
	    var id = {};
	    var vote = {};
	    vote["Values"] = vals[2];
	    vote["Reason"] = vals[3];
	    id["ID"] = member.user.id;
	    id["Votes"] = [];
	    db['members'].push(id);
	}
    }
    
    message.reply('Erfolgreich fuer ' + member.user.tag + '  abgestimmt!')
    fs.writeFile(jsonPath, JSON.stringify(db), function(err){
	if (err) throw err;
	console.log('Saved');
   })    

}

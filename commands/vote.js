const fs = require("fs")
var jsonPath = '../votes.json';
module.exports = message => {
    const member = message.mentions.members.first()
//    const author = message.
    let values = message.content.split(/[ ,]+/);
    let getList = false;
    let endVote = false;
    let addPerRole = false;
    let enoughPermission = false;    

    for (var k  = 0; k < values.length; k++){
	if (values[k].startsWith('-')){
	    if (values[k] === '-list'){
		getList = true;
	    }
	    else if (values[k] === '-end'){
		endVote = true;
	    }
	}
    }

    if(vals.length < 3 && !(getList || endVote)){
	message.reply('Nicht genug Parameter! Bitte mindestens die Punkte anzahl angeben!');
	return;
    }
    let content = fs.readFileSync(jsonPath);
    let db = JSON.parse(content);	    

   // enoughPermission = isInList(db.AllowedVoters, "ID", 
    
    if (getList){
	let s = ""
	Object.keys(db.members).forEach(function (k){
	    var name = db.members[k].Name;
	    var votes = getVotes(db, k);
	    s += name + ' hat ' + votes + ' Punkte \n';
	})
	message.reply(s);
	return;
    }
    else if (endVote){
	var max_vote = 0;
	var name = "";
	var id = "";
	Object.keys(db.members).forEach(function (k){
	    var v = getVotes(db, k);
	    if (v > max_vote){
		max_vote = v;
		name = db.members[k].Name;
		id = db.members[k].ID;
	    }
	})
	var role = message.guild.roles.find(role => role.name === "Auszubildender des Monats");
	//remove last
	var lastWinner = message.guild.members.find(mem => mem.roles.find(r => r.id == role.id));
	lastWinner.removeRole(role);
	//Set new
	var winner = message.guild.members.find(mem => mem.id == id);
	winner.addRole(role.id);
	
	var s = name + " hat **gewonnen**! Mit einer Anzahl von: " + max_vote;
	message.reply(s);
	return;
    }
	
    let val = vals[2];
    let reason = " ";
    if (vals.length > 3) reason = vals[3];
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
	    id["Name"] = member.user.username;
	    id["Votes"] = [];
	    id["Votes"].push(vote);
	    db['members'].push(id);
	}
    }
    
    message.reply('Erfolgreich fuer ' + member.user.tag + '  abgestimmt!')
    fs.writeFile(jsonPath, JSON.stringify(db), function(err){
	if (err) throw err;
	console.log('Saved');
   })    

}

function getVotes(json, id){
    var votes = 0;
    Object.keys(json.members[id].Votes).forEach(function (h){
	votes += Number(json.members[id].Votes[h].Values);
    })
    return votes;
}

function isInList(json, keyname, value){
    Objects.keys(json).forEach(function (k){
	if (json[keyname] == value){
	    return true;
	}
    });
    return false;
}

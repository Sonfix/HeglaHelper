const fs = require("fs");
var foodyName = "../foody.json";
module.exports = message =>  {
    if (!((message.channel.type === 'dm') || (message.channel.type === 'text' &&  message.channel.name === 'mittagessen'))){
	return;
    }
    const user = message.author;
    let content = fs.readFileSync(foodyName)
    let foody = JSON.parse(content);
    let vals = message.content.split(/[ ,]+/);
    let remove = false;
    let getList = false;
    if (vals.length >= 2){
	if (vals[1].indexOf('-') >= 0){
	    if (vals[1] === '-r'){
		remove = true;
	    }
	    else if (vals[1] === '-list'){
		getList = true;
	    }
	}
    }
    //Date comparsion will be done above here
    foody.Lidl.Date = new Date().toISOString().slice(0,10);
    if (getList){
	let list = "Folgende Leute wollen mit in den Lidl: ";
	Object.keys(foody.Lidl.Participants).forEach(function(k){
	    var name = foody.Lidl.Participants[k].Name;
	    list += "\n" + name;
	}) 
	message.reply(list);
	return;
    }
    else if (user){
	let memberAlreadyExists = false;
	Object.keys(foody.Lidl.Participants).forEach(function(k){
	    if(foody.Lidl.Participants[k].ID == user.id){
		if (remove){
		    foody.Lidl.Participants.splice(k, 1);
		    message.reply("Du hast dich erfolgreich ausgetragen!");
		}
		else {
		    memberAlreadyExists = true;
		    message.reply("Du hast dich schon eingetragen!");
		}
	    } 
	})  

	if (!memberAlreadyExists && !remove){
	    var obj = {};
	    obj["ID"] = user.id;
	    obj["Name"] = user.username;
	    foody.Lidl["Participants"].push(obj);
	    message.reply("Du hast dich erfolgreich eingetragen!");
	}

	fs.writeFile(foodyName, JSON.stringify(foody), function(err){
	    if (err) throw err;
	    console.log("Foody saved");
	})
    }
}

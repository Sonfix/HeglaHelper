const fs = require("fs");
const ThaiMenue = require("../functions/ThaiMenue");

var foodyName = "../foody.json";
module.exports = message => {
    if (!((message.channel.type === 'dm') || (message.channel.type === 'text' && message.channel.name === 'mittagessen'))){
	return;
    }
    const user = message.author;
    let content = fs.readFileSync(foodyName);
    let foody = JSON.parse(content);
    let vals = message.content.split(/[ ,]+/);
    let menue = "";
    let remove = false;
    let getList = false;
    var date = new Date();
    if (vals.length >= 2){
	if (vals[1].indexOf('-') == 0){
	    if (vals[1] === '-r'){
		remove = true;
	    }
	    else if (vals[1] === '-list'){
		getList = true;
	    }
	    else if (vals[1] === '-addDaily'){
		if (vals.length >=4){
		    message.reply(ThaiMenue(2, vals[2], vals[3]));
		    return;
		}
	    }
	}	
	else{
	    menue = vals[1];
	}
    }
    else if (vals.length == 1){
	console.log(date.getDay());
	message.reply(ThaiMenue(1, date.getDay(), ""));
	return;
    }

    
    foody.Thai.Date = new Date().toISOString().slice(0,10);

    if (getList){
	let best = "Die Bestellungen fuer heute lauten:"
	Object.keys(foody.Thai.Participants).forEach(function(k){
	    var name = foody.Thai.Participants[k].Name;
	    var menue = foody.Thai.Participants[k].Menue;
	    best += "\n" +  name + ": " + menue;
	})
	message.reply(best);
	return;
    }
    else if (user){
	let memberAlreadyExists = false;
	Object.keys(foody.Thai.Participants).forEach(function(k){
	    if(foody.Thai.Participants[k].ID == user.id){
		if (remove){
		    foody.Thai.Participants.splice(k, 1);
		    message.reply("Du hast dich erfolgreich ausgetragen!");
		} 
		else
		{    
		    memberAlreadyExists = true;
		    if (foody.Thai.Participants[k].Menue != menue){
			foody.Thai.Participants[k].Menue = menue;
			message.reply("Menue geaendert!");
		    }
		}
	    }
	})

	if (!memberAlreadyExists && !remove){
	    var obj = {};
	    obj["ID"] = user.id;
	    obj["Name"] = user.username;
	    obj["Menue"] = menue;
	    foody.Thai.Participants.push(obj);
	    message.reply("Du hast dich erfolgreich eingetragen!");	    
	}

	fs.writeFile(foodyName, JSON.stringify(foody), function(err){
	    if (err) throw err;
	    console.log("Foody saved");
	})
    }
}

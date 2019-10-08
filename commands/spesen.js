const fs = require("fs");
let expenseFile = "../expenses.json";

module.exports = message => {
    let vals = message.content.split(/[ ,]+/);
    let region = "";
    if (vals.length < 2){
	message.reply("Bitte noch das Land eingeben!");
	return;
    }
    region = vals[1];
    let file = fs.readFileSync(expenseFile);
    let expenses = JSON.parse(file);
    let msg = "";
    Object.keys(expenses.Expenses).forEach(function(k) {
	if (expenses.Expenses[k].Country == region || expenses.Expenses[k].ISO == region){
	    msg = "Spesen: \n";
	    console.log(expenses.Expenses[k].Areas);
	    Object.keys(expenses.Expenses[k].Areas).forEach(function (a) {
		msg += 'Gebiet: *' + expenses.Expenses[k].Areas[a].Area  + "* Betrag: **" + expenses.Expenses[k].Areas[a].Value + '** \n';
	    })
	    //' Betrag(An- und Abreisetag) ' + expenses.Expenses[k].Areas[a].ValueHalf +
	}
    })
    if (msg == ""){
	msg = "Das angegebene Land konnte nicht gefunden werden!";
    }
    message.reply(msg); 
}

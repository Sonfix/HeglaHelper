const fs = require("fs");
let menuePath = "../menue.json";

module.exports = (Mode, Index, Val)  => {
    if (Index > 7 || Index < 0){
	return "Index Error!";
    }
    let menue =  fs.readFileSync(menuePath);
    let menue_j = JSON.parse(menue);
    if (Mode == 1){ // READ
	return menue_j.Thai[Index];
    }
    if (Mode == 2){ // WRITE
	menue_j.Thai[Index] = Val;
    }

    fs.writeFile(menuePath, JSON.stringify(menue_j), function(err){
	if (err) throw err;
	console.log("Menue saved");
    })
    return "Value wirtten!";
}

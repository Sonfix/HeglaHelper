function getKeyValue(json, objName, keyname){
    Objects.keys(json[objName]).forEach(function (k){
	return json[objName][k].[keyname];
    })
}

function isInList(json, keyname, value){
    Objects.keys(json).forEach(Function (k){
	if (json[keyname] == value){
	    return true;
	}
    })
    return false;
}

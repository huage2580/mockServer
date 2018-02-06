const model = require('../model.js');

let Moudle = model.Moudle;

var exp = {
	create:async function(name, path,projectid) {
		try{
			await Moudle.create({
				moudle_name:name,
				path:path,
				projectId:projectid
			});
			return true;
		}catch(e){
			return false;
		}
	}
}

module.exports = exp
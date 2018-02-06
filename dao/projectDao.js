const model = require('../model.js');

let Project = model.Project;
let Moudle = model.Moudle;
var exp = {
	create:async function(name, baseUrl,mockPath,userId) {
		try{
			var project = await Project.create({
				project_name:name,
				baseurl:baseUrl,
				mockpath_name:mockPath,
				userId:userId
			});
			return true;
		}catch(e){
			return false;
		}
			
	},
	list:async function(){
		return await Project.findAll({
			include: [ {model: Moudle} ]
		});
	}
}

module.exports = exp
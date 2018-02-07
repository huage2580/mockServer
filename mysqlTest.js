//const model = require('./model.js');
//
//let User = model.User;
//let Project = model.Project;
//(async() => {
////	model.Project.belongsTo(model.User);
////	model.User.hasMany(model.Project);
////	try {
////		var user = await User.create({
////			email: '2838666797@qq.com',
////			passwd: '666',
////			name: '776787',
////			gender: true
////		});
////	} catch(e) {
////		console.log(e)
////	}
////	var project = await Project.create({
////		project_name:"name1",
////		baseurl:'http://www.baidu.com',
////		mockpath_name:'testproject',
////		createby:user.id
////	});
//	
////	var projects = await Project.findAll({
////			include: [ {model: User} ]
////		});
////	console.log(projects)
//	var user = await User.findOne({
//		include: [ {model: Project} ]
//	});
//	console.log(JSON.stringify(user.projects))
//
//})();
const model = require('./model.js');
//
let Request = model.Request;
let Moudle = model.Moudle;
(async () => {
    var request = await Request.findOne({
    	include: [ {model: Moudle} ]
    });
    var project = await request. moudle.getProject();
    console.log(JSON.stringify(project));
})();
//const moment = require('moment') 
//var list = new Date().getTime();
// var f= moment(list).format("MM-DD hh:mm");
//console.log(f)

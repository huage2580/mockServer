const model = require('./model.js');

let User = model.User;
let Project = model.Project;
(async() => {
//	model.Project.belongsTo(model.User);
//	model.User.hasMany(model.Project);
//	try {
//		var user = await User.create({
//			email: '2838666797@qq.com',
//			passwd: '666',
//			name: '776787',
//			gender: true
//		});
//	} catch(e) {
//		console.log(e)
//	}
//	var project = await Project.create({
//		project_name:"name1",
//		baseurl:'http://www.baidu.com',
//		mockpath_name:'testproject',
//		createby:user.id
//	});
	
	var projects = await Project.findAll({
			include: [ {model: User} ]
		});
	console.log(projects)
	

})();

//(async () => {
//  var users = await User.findAll();
//  console.log(users);
//})();
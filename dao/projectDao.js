const model = require('../model.js');

let Project = model.Project;

var exp = {
	create:async function(email, psw) {
			var user = await User.find({
				where: {
					email: email,
					passwd: psw
				}
			});
			return user;
	}
}

module.exports = exp
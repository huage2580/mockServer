const model = require('../model.js');

let User = model.User;

var exp = {
	login:async function(email, psw) {
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
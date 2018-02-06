const model = require('../model.js');

let Request = model.Request;

var exp = {
	create: async function(name, method, moditfy, mid) {
		try {
			await Request.create({
				request_name: name,
				path: "/path",
				method: method,
				is_mock: false,
				modify: moditfy,
				moudleId:mid
			});
			return true;
		} catch(e) {
			console.log(e);
			return false;
		}
	},
	listmoudle: async function(mid) {
		return await Request.findAll({
			where: {
				moudleId: mid
			},
			order: "updatedAt DESC"
		});
	}
}

module.exports = exp
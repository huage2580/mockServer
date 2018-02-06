const db = require('../db');
const model = require('../model.js');
module.exports = db.defineModel('request', {
			request_name: {
				type: db.STRING(100),
				unique: true
			},
			path: {
				type: db.STRING(100)
			},
			method: db.STRING(100),
			is_mock: {
				type:db.BOOLEAN,
				defaultValue: false
			},
			modify:db.STRING(100)
		});

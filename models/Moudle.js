const db = require('../db');
const model = require('../model.js');
module.exports = db.defineModel('moudle', {
			moudle_name: {
				type: db.STRING(100),
				unique: true
			},
			path: db.STRING(100)
		});

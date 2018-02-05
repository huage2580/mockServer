const db = require('../db');
const model = require('../model.js');
module.exports = db.defineModel('project', {
	project_name: {
		type: db.STRING(100),
		unique: true
	},
	baseurl: db.STRING(100),
	mockpath_name: {
		type: db.STRING(100),
		unique: true
	}
});

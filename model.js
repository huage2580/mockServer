const fs = require('fs');
const db = require('./db');

let files = fs.readdirSync(__dirname + '/models');

let js_files = files.filter((f)=>{
    return f.endsWith('.js');
}, files);

module.exports = {};

for (let f of js_files) {
    console.log(`import model from file ${f}...`);
    let name = f.substring(0, f.length - 3);
    module.exports[name] = require(__dirname + '/models/' + f);
}

//-----------------添加关联---------------
const model = module.exports;
//----------------------------------------
//用户-项目 1:m
model.Project.belongsTo(model.User);
model.User.hasMany(model.Project);

model.Moudle.belongsTo(model.Project);
model.Project.hasMany(model.Moudle);

model.Request.belongsTo(model.Moudle);
model.Moudle.hasMany(model.Request);
//----------------------------------------

module.exports.sync = () => {
    db.sync();
};
const model = require('./model.js');
console.log('init db start.');
 model.sync();
console.log('init db ok.');


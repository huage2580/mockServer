const model = require('./model.js');

let User = model.User;

(async() => {
	try {
		var user = await User.create({
			email: '1235546@qq.com',
			passwd: '666',
			name: '776787',
			gender: true
		});
	} catch(e) {
		console.log(e)
	}
	var user = await User.find(
		{
        where: {
            email: '12346@qq.com',
            passwd:'666'
        }
    }
	);
	if(user==null){
		console.log("user not found!");
	}else{
		console.log(user.name);
	}
	

})();

//(async () => {
//  var users = await User.findAll();
//  console.log(users);
//})();
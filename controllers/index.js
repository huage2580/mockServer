// index:
const projectDao = require('../dao/projectDao')
const requestDao = require('../dao/requestDao')
const moment = require('moment') 
module.exports = {
    'GET /': async (ctx, next) => {
    	var user = ctx.session.user;
    	if(user==null){
    		ctx.redirect('/login');
    	}else{
    		var mid =  ctx.query.mid;
    		var apis;
    		console.log(mid);
    		if(mid!=null){
    			apis =await requestDao.listmoudle(mid);
    			for(var i=0;i<apis.length;i++){
    				api = apis[i];
    				api.updatedTime=moment(api.updatedAt).format("MM-DD hh:mm");
    			}
    		}
    		var list = await projectDao.list();
    		console.log(JSON.stringify(apis));
    		ctx.render('index2.html', {
            user: user.name,
            projects:list,
            apis:apis,
            mid:mid
        });
    	}
    }
};

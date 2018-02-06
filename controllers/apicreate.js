// 创建接口:
const requestDao = require('../dao/requestDao')
module.exports = {
    'POST /api': async (ctx, next) => {
    	if(ctx.session.user==null){
    		ctx.redirect('/login');
    	}else{
    		var
            name = ctx.request.body.name || '',
            method = ctx.request.body.method || '',
            mid = ctx.request.body.mid || '',
            uname = ctx.session.user.name;
            var result = await requestDao.create(name, method,uname,mid);
			ctx.body={'result':result};
    	}
    	
        
    }
};

// 创建项目分类:
const projectDao = require('../dao/projectDao')
module.exports = {
    'POST /project': async (ctx, next) => {
    	if(ctx.session.user==null){
    		ctx.redirect('/login');
    	}else{
    		var
            name = ctx.request.body.name || '',
            baseUrl = ctx.request.body.baseUrl || '',
            mockPath = ctx.request.body.mockPath || '',
            userId = ctx.session.user.id;
            var result = await projectDao.create(name, baseUrl,mockPath,userId);
			ctx.body={'result':result};
    	}
    	
        
    }
};

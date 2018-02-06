// 创建项目分类:
const moudleDao = require('../dao/moudleDao')
module.exports = {
    'POST /moudle': async (ctx, next) => {
    	if(ctx.session.user==null){
    		ctx.redirect('/login');
    	}else{
    		var
            name = ctx.request.body.name || '',
            proid = ctx.request.body.proid || '',
            mockPath = ctx.request.body.mock || '';
            var result = await moudleDao.create(name, mockPath,proid);
			ctx.body={'result':result};
    	}
    	
        
    }
};
